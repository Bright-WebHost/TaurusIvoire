import React from 'react'
import { useTranslation } from 'react-i18next'


export default function Lantest() {
 const {t}=  useTranslation()
  return (
    <div>
        <h1>{t("greeting")}</h1>
    </div>
  )
}
