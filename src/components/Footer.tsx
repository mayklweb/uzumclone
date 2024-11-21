import React from 'react'

export default function Footer() {
  return (
    <footer>
      <div className='container mx-auto px-5'>
        <div className='mt-12 flex justify-between border-b-[1px] border-b-solid border-b-grey-200 mb-20 pb-24'>
          <div className='flex flex-col gap-4'>
            <h5 className='text-sm text-dark-100 font-semibold'>О нас</h5>
            <p className='text-xs text-grey-300 py-2'>Пункты выдачи</p>
            <p className='text-xs text-grey-300 py-2'>Вакансии</p>
          </div>
          <div className='flex flex-col gap-4'>
            <h5 className='text-sm text-dark-100 font-semibold'>Пользователям</h5>
            <p className='text-xs text-grey-300 py-2'>Связаться с нами</p>
            <p className='text-xs text-grey-300 py-2'>Вопрос - Ответ</p>
          </div>
          <div className='flex flex-col'>
            <h5 className='text-sm text-dark-100 font-semibold mb-3'>Для предпринимателей</h5>
            <a className='text-xs text-grey-300 py-2'>Для предпринимателей</a>
            <a className='text-xs text-grey-300 py-2'>Вход для продавцов</a>
            <a className='text-xs text-grey-300 py-2'>Открыть пункт выдачи</a>
          </div>
          <div className='flex flex-col gap-4'>
            <div>
              <h5 className='text-sm text-dark-100 font-semibold'>Скачать приложение</h5>
              <div>
                <button className='text-xs text-grey-300 py-1'>AppStore</button>
                <button className='text-xs text-grey-300 py-1'>Google Play</button>
              </div>
            </div>
            <div>
              <h5 className='text-sm text-dark-100 font-semibold'>Uzum в соцсетях</h5>
              <button className='text-xs text-grey-300 py-1'>Instagram</button>
              <button className='text-xs text-grey-300 py-1'>Telegram</button>
              <button className='text-xs text-grey-300 py-1'>Facebook</button>
              <button className='text-xs text-grey-300 py-1'>YouTube</button>
            </div>
          </div>
        </div>
        <div></div>
      </div>
    </footer>
  )
}
