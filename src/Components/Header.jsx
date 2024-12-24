import React from 'react'
import styles from '../Styles/header.module.css'

export default function Header() {
  return (
    <header className = {styles.header}>
        <h1 className = {styles.titulo}>Sebastian's Galery</h1>
        <div className = {styles.separador}></div>
    </header>
  )
}