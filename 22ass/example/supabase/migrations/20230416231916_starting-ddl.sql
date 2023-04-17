-- create a migration script to add a table named task with a column named title description is_done and user
create table task (
  id uuid primary key default uuid_generate_v4(),
  title text not null,
  description text,
  is_done boolean default false,
  user_id uuid references auth.users(id) not null
  constraint title_length check (char_length(title) > 0 and char_length(title) < 200)
);

-- add role level permissions for the task table
alter table task enable row level security;

CREATE POLICY "tasks_select_policy" ON 
    task
FOR SELECT USING (auth.role() = 'authenticated');

CREATE POLICY "tasks_insert_policy" ON 
    task
FOR INSERT WITH CHECK (auth.role() = 'authenticated' AND auth.uid() = user_id);

CREATE POLICY "tasks_update_policy" ON 
    task
FOR UPDATE USING (auth.role() = 'authenticated' AND auth.uid() = user_id);

CREATE POLICY "tasks_delete_policy" ON 
    task
FOR DELETE USING (auth.role() = 'authenticated' AND auth.uid() = user_id);
