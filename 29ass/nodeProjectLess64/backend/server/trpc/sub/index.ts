import { EventEmitter } from 'events';
import { observable } from '@trpc/server/observable';
import { z } from 'zod';
import {router, publicProcedure} from '../trpc'
// create a global event emitter (could be replaced by redis, etc)
const ee = new EventEmitter();

// const t = initTRPC.create();
console.log('started')
export const subRouter = router({
  onAdd: publicProcedure.subscription(() => {
    // return an `observable` with a callback which is triggered immediately
    return observable<string>((emit) => {
      const onAdd = (data: string) => {
        // emit data to client
        console.log('onAdd next', data);
        emit.next(data);
      };
      console.log('onAdd add', onAdd)
      // trigger `onAdd()` when `add` is triggered in our event emitter
      ee.on('add', onAdd);

      // unsubscribe function when client disconnects or stops subscribing
      return () => {
        console.log('onAdd remove', onAdd);
        ee.off('add', onAdd);
      };
    });
  }),
  add: publicProcedure
    .input(
      z.object({
        id: z.string(),
        text: z.string().min(1),
      }),
    )
    .mutation(async (opts) => {
      const post = { ...opts.input }; /* [..] add to db */
      console.log('add', post)
      ee.emit('add', post);
      return post;
    }),
});