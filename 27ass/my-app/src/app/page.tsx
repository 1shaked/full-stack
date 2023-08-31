import styles from './page.module.css'
import Example from '@/components/example'

export default function Home() {
  return (
    <main className={styles.main}>
      <h2>next js</h2>
      <Example />
    </main>
  )
}
