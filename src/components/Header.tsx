import CartIcon from '../assets/icons/CartIcon'
import HeartIcon from '../assets/icons/HeartIcon'
import KatalogIcon from '../assets/icons/CatalogIcon'
import LogoIcon from '../assets/icons/LogoIcon'
import SearchIcon from '../assets/icons/SearchIcon'
import UserIcon from '../assets/icons/UserIcon'

export default function Header() {
  return (
    <header>
      {/* HEADER TOP */}
      <div className='bg-grey-100 py-1'>
        <div className='container mx-auto px-[1rem]'>
          <div className='flex items-center justify-between'>
            <div>
              <button className='text-sm font-medium'>Tashkent</button>
            </div>
            <div className='flex gap-3'>
              <div className='flex items-center gap-3'>
                <button className='text-sm font-medium text-primary'>Стать продавцом</button>
                <div className='w-0.5 h-4 bg-grey-o-100'></div>
                <button className='text-sm font-medium text-primary'>Открыт пункт выдачи</button>
              </div>
              <button className='text-sm text-dark font-medium hover:text-secondary'>Вопрос-ответ</button>
              <button className='text-sm text-dark font-medium hover:text-secondary'>Мой заказы</button>
              <button></button>
            </div>
          </div>

        </div>
      </div>

      <div className='container mx-auto px-[1rem]'>

        {/* HEADER */}
        <div className='py-5 flex items-center justify-between'>
          <div className='flex items-center justify-center'>
            <LogoIcon />
          </div>

          <button className='bg-primary-90 mr-2 ml-8 py-2 px-4 rounded-[4px] flex items-center gap-2 hover:bg-h-btn-hover transition'>
            <span>
              <KatalogIcon />
            </span>
            <span className='text-sm text-primary font-medium'> Каталог </span>
          </button>
          <div className='w-full mr-4 rounded-[4px] border-[1px] border-grey-o-100 overflow-hidden outline-none'>
            <form className='flex w-full'>
              <input type="text" className='w-full text-sm py-[.56rem] px-4 outline-none' placeholder='Искать товары и категории' />
              <button className=' bg-grey-200 w-20  flex items-center justify-center'>
                <SearchIcon />
              </button>
            </form>
          </div>
          <div className='flex gap-2'>
            <button className='text-sm font-medium text-txt-p py-2 px-3 rounded-[4px] flex items-center justify-center hover:bg-h-hover transition gap-x-2'>
              <span>
                <UserIcon />
              </span>
              <span className='hidden lg:block'>Войти</span>
            </button>
            <button className='text-sm font-medium text-txt-p py-2 px-3 rounded-[4px] flex items-center justify-center hover:bg-h-hover transition gap-x-2'>
              <span>
                <HeartIcon />
              </span>
              <span className='hidden lg:block'>Избранное</span>
            </button>
            <button className='text-sm font-medium text-txt-p py-2 px-3 rounded-[4px] flex items-centerjustify-center hover:bg-h-hover transition gap-x-2'>
              <span>
                <CartIcon />
              </span>
              <span className='hidden lg:block'>Корзина</span>
            </button>
          </div>
        </div>

        {/* HEADER BOTTOM */}
      </div>
    </header>
  )
}
