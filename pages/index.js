import { useTranslations } from 'next-intl'

export default function Home() {
  const t = useTranslations('Home')
  return (
    <div className='font-montserrat'>
      Visit Flowrift Folder
    </div>
  )
}
