import JotaiExample from '@/components/jotaiExample'
import styles from './page.module.css'
import Example from '@/components/example'
import JotaiThirdExample from '@/components/third'
import TodosComponent from '@/components/todos'

export default function Home() {
  return (
    <main className={styles.main}>
      <h2>next js</h2>
      {/* <Example />
      <JotaiExample />
      <JotaiThirdExample /> */}
      <TodosComponent />
    </main>
  )
}
