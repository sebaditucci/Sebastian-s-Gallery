import React from 'react'
import styles from '../Styles/nav.module.css'

export default function Nav({ setFilter }) {
  return (
    <nav className={styles.nav}>
      <ul className={styles.list}>
        <li><button onClick={() => setFilter("")} className={styles.boton}>Home</button></li>
        <li><button onClick={() => setFilter("paisaje")} className={styles.boton}>Paisajes</button></li>
        <li><button onClick={() => setFilter("cocina")} className={styles.boton}>Cocina</button></li>
        <li><button onClick={() => setFilter("vehiculos")} className={styles.boton}>Vehículos</button></li>
        <li><button onClick={() => setFilter("ropa")} className={styles.boton}>Ropa</button></li>
      </ul>
    </nav>
  );
}