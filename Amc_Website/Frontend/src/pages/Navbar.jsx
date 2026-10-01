import React from 'react'
import { Link } from 'react-router-dom'
import logoTop from '../assets/Logo Top.png'
import gsap from 'gsap'
import { useNavigate, useLocation } from 'react-router-dom'

const Navbar = () => {
    const navigate = useNavigate()
    const loaction = useLocation();
    const currURL = loaction.pathname;
    return (
        <nav className="fixed top-0 left-0 w-full h-20 md:h-24 lg:h-[7vw] flex items-center justify-between px-4 md:px-8 z-50 bg-transparent">
            <div className="h-12 w-12 md:h-20 md:w-20 lg:h-[7vw] lg:w-[7vw] shrink-0 cursor-pointer group" onClick={() => navigate('/')}>
                <img
                    className="h-full w-full object-contain"
                    src={logoTop}
                    alt="Logo Top" />
            </div>
            <div className='flex items-center justify-center space-x-4 md:space-x-8 lg:space-x-12 w-full ml-2 md:ml-5'>
                <div>
                    <Link className={`vt323-regular text-lg md:text-3xl lg:text-4xl uppercase ${currURL === '/competitions' ? 'text-purple-500' : 'text-white hover:text-purple-500'} transition-colors`} to='/competitions'>Competitions</Link>
                </div>
                <div>
                    <Link className={`vt323-regular text-lg md:text-3xl lg:text-4xl uppercase ${currURL === '/projects' ? 'text-purple-500' : 'text-white hover:text-purple-500'} transition-colors`} to='/projects'>Projects</Link>
                </div>
                <div>
                    <Link className={`vt323-regular text-lg md:text-3xl lg:text-4xl uppercase ${currURL === '/resources' ? 'text-purple-500' : 'text-white hover:text-purple-500'} transition-colors`} to='/resources'>Resources</Link>
                </div>
            </div>
            
            <svg className="hidden md:block h-8 lg:h-[2.5vw]" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24"></svg>
            
            <div className='hidden md:flex flex-col items-center justify-center h-auto w-12 lg:w-[5vw] top-24 lg:top-40 backdrop-blur-md right-2 absolute rounded-lg py-6 lg:pt-3 lg:p-1 gap-4 lg:gap-0 bg-white/5 md:bg-transparent'>
                <a href="https://www.instagram.com/amc.iitbhu/?hl=en">
                    <div className='w-full h-auto lg:h-15 hover:cursor-pointer group'>
                        <div className='flex align-middle justify-center fill-white group-hover:fill-purple-500 transition-all'>
                            <svg className="h-6 w-6 lg:h-[2.3vw] lg:w-auto" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24"><path d="M12.001 9C10.3436 9 9.00098 10.3431 9.00098 12C9.00098 13.6573 10.3441 15 12.001 15C13.6583 15 15.001 13.6569 15.001 12C15.001 10.3427 13.6579 9 12.001 9ZM12.001 7C14.7614 7 17.001 9.2371 17.001 12C17.001 14.7605 14.7639 17 12.001 17C9.24051 17 7.00098 14.7629 7.00098 12C7.00098 9.23953 9.23808 7 12.001 7ZM18.501 6.74915C18.501 7.43926 17.9402 7.99917 17.251 7.99917C16.5609 7.99917 16.001 7.4384 16.001 6.74915C16.001 6.0599 16.5617 5.5 17.251 5.5C17.9393 5.49913 18.501 6.0599 18.501 6.74915ZM12.001 4C9.5265 4 9.12318 4.00655 7.97227 4.0578C7.18815 4.09461 6.66253 4.20007 6.17416 4.38967C5.74016 4.55799 5.42709 4.75898 5.09352 5.09255C4.75867 5.4274 4.55804 5.73963 4.3904 6.17383C4.20036 6.66332 4.09493 7.18811 4.05878 7.97115C4.00703 9.0752 4.00098 9.46105 4.00098 12C4.00098 14.4745 4.00753 14.8778 4.05877 16.0286C4.0956 16.8124 4.2012 17.3388 4.39034 17.826C4.5591 18.2606 4.7605 18.5744 5.09246 18.9064C5.42863 19.2421 5.74179 19.4434 6.17187 19.6094C6.66619 19.8005 7.19148 19.9061 7.97212 19.9422C9.07618 19.9939 9.46203 20 12.001 20C14.4755 20 14.8788 19.9934 16.0296 19.9422C16.8117 19.9055 17.3385 19.7996 17.827 19.6106C18.2604 19.4423 18.5752 19.2402 18.9074 18.9085C19.2436 18.5718 19.4445 18.2594 19.6107 17.8283C19.8013 17.3358 19.9071 16.8098 19.9432 16.0289C19.9949 14.9248 20.001 14.5389 20.001 12C20.001 9.52552 19.9944 9.12221 19.9432 7.97137C19.9064 7.18906 19.8005 6.66149 19.6113 6.17318C19.4434 5.74038 19.2417 5.42635 18.9084 5.09255C18.573 4.75715 18.2616 4.55693 17.8271 4.38942C17.338 4.19954 16.8124 4.09396 16.0298 4.05781C14.9258 4.00605 14.5399 4 12.001 4ZM12.001 2C14.7176 2 15.0568 2.01 16.1235 2.06C17.1876 2.10917 17.9135 2.2775 18.551 2.525C19.2101 2.77917 19.7668 3.1225 20.3226 3.67833C20.8776 4.23417 21.221 4.7925 21.476 5.45C21.7226 6.08667 21.891 6.81333 21.941 7.8775C21.9885 8.94417 22.001 9.28333 22.001 12C22.001 14.7167 21.991 15.0558 21.941 16.1225C21.8918 17.1867 21.7226 17.9125 21.476 18.55C21.2218 19.2092 20.8776 19.7658 20.3226 20.3217C19.7668 20.8767 19.2076 21.22 18.551 21.475C17.9135 21.7217 17.1876 21.89 16.1235 21.94C15.0568 21.9875 14.7176 22 12.001 22C9.28431 22 8.94514 21.99 7.87848 21.94C6.81431 21.8908 6.08931 21.7217 5.45098 21.475C4.79264 21.2208 4.23514 20.8767 3.67931 20.3217C3.12348 19.7658 2.78098 19.2067 2.52598 18.55C2.27848 17.9125 2.11098 17.1867 2.06098 16.1225C2.01348 15.0558 2.00098 14.7167 2.00098 12C2.00098 9.28333 2.01098 8.94417 2.06098 7.8775C2.11014 6.8125 2.27848 6.0875 2.52598 5.45C2.78014 4.79167 3.12348 4.23417 3.67931 3.67833C4.23514 3.1225 4.79348 2.78 5.45098 2.525C6.08848 2.2775 6.81348 2.11 7.87848 2.06C8.94514 2.0125 9.28431 2 12.001 2Z"></path></svg>
                        </div>
                    </div>
                </a>
                <a href="https://github.com/aero-modelling-iitbhu">
                    <div className='w-full h-auto lg:h-15 hover:cursor-pointer group'>
                        <div className='flex align-middle justify-center fill-white group-hover:fill-purple-500 transition-all'>
                            <svg className="h-6 w-6 lg:h-[2.3vw] lg:w-auto" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24"><path d="M12.001 2C6.47598 2 2.00098 6.475 2.00098 12C2.00098 16.425 4.86348 20.1625 8.83848 21.4875C9.33848 21.575 9.52598 21.275 9.52598 21.0125C9.52598 20.775 9.51348 19.9875 9.51348 19.15C7.00098 19.6125 6.35098 18.5375 6.15098 17.975C6.03848 17.6875 5.55098 16.8 5.12598 16.5625C4.77598 16.375 4.27598 15.9125 5.11348 15.9C5.90098 15.8875 6.46348 16.625 6.65098 16.925C7.55098 18.4375 8.98848 18.0125 9.56348 17.75C9.65098 17.1 9.91348 16.6625 10.201 16.4125C7.97598 16.1625 5.65098 15.3 5.65098 11.475C5.65098 10.3875 6.03848 9.4875 6.67598 8.7875C6.57598 8.5375 6.22598 7.5125 6.77598 6.1375C6.77598 6.1375 7.61348 5.875 9.52598 7.1625C10.326 6.9375 11.176 6.825 12.026 6.825C12.876 6.825 13.726 6.9375 14.526 7.1625C16.4385 5.8625 17.276 6.1375 17.276 6.1375C17.826 7.5125 17.476 8.5375 17.376 8.7875C18.0135 9.4875 18.401 10.375 18.401 11.475C18.401 15.3125 16.0635 16.1625 13.8385 16.4125C14.201 16.725 14.5135 17.325 14.5135 18.2625C14.5135 19.6 14.501 20.675 14.501 21.0125C14.501 21.275 14.6885 21.5875 15.1885 21.4875C19.259 20.1133 21.9999 16.2963 22.001 12C22.001 6.475 17.526 2 12.001 2Z"></path></svg>
                        </div>
                    </div>
                </a>
                <a href="https://chat.whatsapp.com/GaHDur2aAvS3JH57MDudyg">
                    <div className='w-full h-auto lg:h-15 hover:cursor-pointer group'>
                        <div className='flex align-middle justify-center fill-white group-hover:fill-purple-500 transition-all'>
                            <svg className="h-6 w-6 lg:h-[2.3vw] lg:w-auto" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24"><path d="M7.25361 18.4944L7.97834 18.917C9.18909 19.623 10.5651 20 12.001 20C16.4193 20 20.001 16.4183 20.001 12C20.001 7.58172 16.4193 4 12.001 4C7.5827 4 4.00098 7.58172 4.00098 12C4.00098 13.4363 4.37821 14.8128 5.08466 16.0238L5.50704 16.7478L4.85355 19.1494L7.25361 18.4944ZM2.00516 22L3.35712 17.0315C2.49494 15.5536 2.00098 13.8345 2.00098 12C2.00098 6.47715 6.47813 2 12.001 2C17.5238 2 22.001 6.47715 22.001 12C22.001 17.5228 17.5238 22 12.001 22C10.1671 22 8.44851 21.5064 6.97086 20.6447L2.00516 22ZM8.39232 7.30833C8.5262 7.29892 8.66053 7.29748 8.79459 7.30402C8.84875 7.30758 8.90265 7.31384 8.95659 7.32007C9.11585 7.33846 9.29098 7.43545 9.34986 7.56894C9.64818 8.24536 9.93764 8.92565 10.2182 9.60963C10.2801 9.76062 10.2428 9.95633 10.125 10.1457C10.0652 10.2428 9.97128 10.379 9.86248 10.5183C9.74939 10.663 9.50599 10.9291 9.50599 10.9291C9.50599 10.9291 9.40738 11.0473 9.44455 11.1944C9.45903 11.25 9.50521 11.331 9.54708 11.3991C9.57027 11.4368 9.5918 11.4705 9.60577 11.4938C9.86169 11.9211 10.2057 12.3543 10.6259 12.7616C10.7463 12.8783 10.8631 12.9974 10.9887 13.108C11.457 13.5209 11.9868 13.8583 12.559 14.1082L12.5641 14.1105C12.6486 14.1469 12.692 14.1668 12.8157 14.2193C12.8781 14.2457 12.9419 14.2685 13.0074 14.2858C13.0311 14.292 13.0554 14.2955 13.0798 14.2972C13.2415 14.3069 13.335 14.2032 13.3749 14.1555C14.0984 13.279 14.1646 13.2218 14.1696 13.2222V13.2238C14.2647 13.1236 14.4142 13.0888 14.5476 13.097C14.6085 13.1007 14.6691 13.1124 14.7245 13.1377C15.2563 13.3803 16.1258 13.7587 16.1258 13.7587L16.7073 14.0201C16.8047 14.0671 16.8936 14.1778 16.8979 14.2854C16.9005 14.3523 16.9077 14.4603 16.8838 14.6579C16.8525 14.9166 16.7738 15.2281 16.6956 15.3913C16.6406 15.5058 16.5694 15.6074 16.4866 15.6934C16.3743 15.81 16.2909 15.8808 16.1559 15.9814C16.0737 16.0426 16.0311 16.0714 16.0311 16.0714C15.8922 16.159 15.8139 16.2028 15.6484 16.2909C15.391 16.428 15.1066 16.5068 14.8153 16.5218C14.6296 16.5313 14.4444 16.5447 14.2589 16.5347C14.2507 16.5342 13.6907 16.4482 13.6907 16.4482C12.2688 16.0742 10.9538 15.3736 9.85034 14.402C9.62473 14.2034 9.4155 13.9885 9.20194 13.7759C8.31288 12.8908 7.63982 11.9364 7.23169 11.0336C7.03043 10.5884 6.90299 10.1116 6.90098 9.62098C6.89729 9.01405 7.09599 8.4232 7.46569 7.94186C7.53857 7.84697 7.60774 7.74855 7.72709 7.63586C7.85348 7.51651 7.93392 7.45244 8.02057 7.40811C8.13607 7.34902 8.26293 7.31742 8.39232 7.30833Z"></path></svg>
                        </div>
                    </div>
                </a>
                <a href="https://www.facebook.com/amc.iitbhu/">
                    <div className='w-full h-auto lg:h-15 hover:cursor-pointer group'>
                        <div className='flex align-middle justify-center fill-white group-hover:fill-purple-500 transition-all'>
                            <svg className="h-6 w-6 lg:h-[2.3vw] lg:w-auto" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24"><path d="M13.001 19.9381C16.9473 19.446 20.001 16.0796 20.001 12C20.001 7.58172 16.4193 4 12.001 4C7.5827 4 4.00098 7.58172 4.00098 12C4.00098 16.0796 7.05467 19.446 11.001 19.9381V14H9.00098V12H11.001V10.3458C11.001 9.00855 11.1402 8.52362 11.4017 8.03473C11.6631 7.54584 12.0468 7.16216 12.5357 6.9007C12.9184 6.69604 13.3931 6.57252 14.2227 6.51954C14.5519 6.49851 14.9781 6.52533 15.501 6.6V8.5H15.001C14.0837 8.5 13.7052 8.54332 13.4789 8.66433C13.3386 8.73939 13.2404 8.83758 13.1653 8.97793C13.0443 9.20418 13.001 9.42853 13.001 10.3458V12H15.501L15.001 14H13.001V19.9381ZM12.001 22C6.47813 22 2.00098 17.5228 2.00098 12C2.00098 6.47715 6.47813 2 12.001 2C17.5238 2 22.001 6.47715 22.001 12C22.001 17.5228 17.5238 22 12.001 22Z"></path></svg>
                        </div>
                    </div>
                </a>
                <a href="https://www.youtube.com/@amciitbhu">
                    <div className='w-full h-auto lg:h-15 hover:cursor-pointer group'>
                        <div className='flex align-middle justify-center fill-white group-hover:fill-purple-500 transition-all'>
                            <svg className="h-6 w-6 lg:h-[2.3vw] lg:w-auto" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24"><path d="M19.6069 6.99482C19.5307 6.69695 19.3152 6.47221 19.0684 6.40288C18.6299 6.28062 16.501 6 12.001 6C7.50098 6 5.37252 6.28073 4.93225 6.40323C4.68776 6.47123 4.4723 6.69593 4.3951 6.99482C4.2863 7.41923 4.00098 9.19595 4.00098 12C4.00098 14.804 4.2863 16.5808 4.3954 17.0064C4.47126 17.3031 4.68676 17.5278 4.93251 17.5968C5.37252 17.7193 7.50098 18 12.001 18C16.501 18 18.6299 17.7194 19.0697 17.5968C19.3142 17.5288 19.5297 17.3041 19.6069 17.0052C19.7157 16.5808 20.001 14.8 20.001 12C20.001 9.2 19.7157 7.41923 19.6069 6.99482ZM21.5442 6.49818C22.001 8.28 22.001 12 22.001 12C22.001 12 22.001 15.72 21.5442 17.5018C21.2897 18.4873 20.547 19.2618 19.6056 19.5236C17.8971 20 12.001 20 12.001 20C12.001 20 6.10837 20 4.39637 19.5236C3.45146 19.2582 2.70879 18.4836 2.45774 17.5018C2.00098 15.72 2.00098 12 2.00098 12C2.00098 12 2.00098 8.28 2.45774 6.49818C2.71227 5.51273 3.45495 4.73818 4.39637 4.47636C6.10837 4 12.001 4 12.001 4C12.001 4 17.8971 4 19.6056 4.47636C20.5505 4.74182 21.2932 5.51636 21.5442 6.49818ZM10.001 15.5V8.5L16.001 12L10.001 15.5Z"></path></svg>
                        </div>
                    </div>
                </a>
            </div>
            <div className='fixed md:absolute bottom-0 md:top-40 left-0 md:left-2 w-full md:w-24 lg:w-[5vw] h-20 md:h-auto lg:h-[30vw] bg-black/80 md:bg-white/5 backdrop-blur-md rounded-t-lg md:rounded-lg pt-0 md:pt-4 md:py-8 md:pb-8 p-1 flex flex-row md:flex-col justify-around items-center z-50'>
                <div className='w-auto md:w-full h-15 hover:cursor-pointer group mt-0 md:mt-2 lg:mt-5 flex flex-col items-center justify-center' onClick={() => { navigate('/') }}>
                    <div className={`flex align-middle justify-center ${currURL == '/' ? 'fill-purple-500' : 'fill-white group-hover:fill-purple-500 transition-all'} `}>
                        <svg className="h-6 w-6 md:h-7 lg:h-[2.3vw] lg:w-auto" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24"><path d="M19 21H5C4.44772 21 4 20.5523 4 20V11L1 11L11.3273 1.6115C11.7087 1.26475 12.2913 1.26475 12.6727 1.6115L23 11L20 11V20C20 20.5523 19.5523 21 19 21ZM6 19H18V9.15745L12 3.7029L6 9.15745V19Z"></path></svg>
                    </div>
                    <div className={`vt323-regular flex items-center justify-center transition-colors duration-300 text-[10px] md:text-sm lg:text-base ${currURL === '/' ? 'text-purple-500' : 'text-white group-hover:text-purple-500'}`}>
                        Home
                    </div>
                </div>
                <div className='w-auto md:w-full h-15 hover:cursor-pointer group mt-0 md:mt-4 flex flex-col items-center justify-center' onClick={() => { navigate('/helm') }}>
                    <div className={`flex align-middle justify-center ${currURL === '/helm' ? 'fill-purple-500' : 'fill-white group-hover:fill-purple-500 transition-all'} `}>
                        <svg className="h-6 w-6 md:h-7 lg:h-[2.3vw] lg:w-auto" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24"><path d="M5.23379 7.72989C6.65303 5.48625 9.15342 4 12.0002 4C14.847 4 17.3474 5.48625 18.7667 7.72989L20.4569 6.66071C18.6865 3.86199 15.5612 2 12.0002 2C8.43928 2 5.31393 3.86199 3.54356 6.66071L5.23379 7.72989ZM12.0002 20C9.15342 20 6.65303 18.5138 5.23379 16.2701L3.54356 17.3393C5.31393 20.138 8.43928 22 12.0002 22C15.5612 22 18.6865 20.138 20.4569 17.3393L18.7667 16.2701C17.3474 18.5138 14.847 20 12.0002 20ZM12 12C13.6569 12 15 10.6569 15 9C15 7.34315 13.6569 6 12 6C10.3431 6 9 7.34315 9 9C9 10.6569 10.3431 12 12 12ZM12 13C14.2091 13 16 14.7909 16 17H8C8 14.7909 9.79086 13 12 13ZM6 12C6 13.6569 4.65685 15 3 15C1.34315 15 0 13.6569 0 12C0 10.3431 1.34315 9 3 9C4.65685 9 6 10.3431 6 12ZM21 15C22.6569 15 24 13.6569 24 12C24 10.3431 22.6569 9 21 9C19.3431 9 18 10.3431 18 12C18 13.6569 19.3431 15 21 15Z"></path></svg>
                    </div>
                    <div className={`vt323-regular flex items-center justify-center transition-colors duration-300 text-[10px] md:text-sm lg:text-base ${currURL === '/helm' ? 'text-purple-500' : 'text-white group-hover:text-purple-500'}`}>
                        Members
                    </div>
                </div>
                <div className='w-auto md:w-full h-15 hover:cursor-pointer group mt-0 md:mt-4 flex flex-col items-center justify-center' onClick={() => { navigate('/alumni') }}>
                    <div className={`flex align-middle justify-center ${currURL === '/alumni' ? 'fill-purple-500' : 'fill-white group-hover:fill-purple-500 transition-all'} `}>
                        <svg className="h-6 w-6 md:h-7 lg:h-[2.3vw] lg:w-auto" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24"><path d="M4 22C4 17.5817 7.58172 14 12 14C16.4183 14 20 17.5817 20 22H4ZM12 13C8.685 13 6 10.315 6 7C6 3.685 8.685 1 12 1C15.315 1 18 3.685 18 7C18 10.315 15.315 13 12 13Z"></path></svg>
                    </div>
                    <div className={`vt323-regular flex items-center justify-center transition-colors duration-300 text-[10px] md:text-sm lg:text-base ${currURL === '/alumni' ? 'text-purple-500' : 'text-white group-hover:text-purple-500'}`}>
                        Alumni
                    </div>
                </div>
                <div className='w-auto md:w-full h-15 hover:cursor-pointer group mt-0 md:mt-4 flex flex-col items-center justify-center' onClick={() => { navigate('/victory') }}>
                    <div className={`flex align-middle justify-center ${currURL === '/victory' ? 'fill-purple-500' : 'fill-white group-hover:fill-purple-500 transition-all'} `}>
                        <svg className="h-6 w-6 md:h-7 lg:h-[2.3vw] lg:w-auto" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24"><path d="M13.0049 16.9409V19.0027H18.0049V21.0027H6.00488V19.0027H11.0049V16.9409C7.05857 16.4488 4.00488 13.0824 4.00488 9.00275V3.00275H20.0049V9.00275C20.0049 13.0824 16.9512 16.4488 13.0049 16.9409ZM1.00488 5.00275H3.00488V9.00275H1.00488V5.00275ZM21.0049 5.00275H23.0049V9.00275H21.0049V5.00275Z"></path></svg>
                    </div>
                    <div className={`vt323-regular flex items-center justify-center transition-colors duration-300 text-[10px] md:text-sm lg:text-base ${currURL === '/victory' ? 'text-purple-500' : 'text-white group-hover:text-purple-500'}`}>
                        Victory
                    </div>
                </div>
                <div className='w-auto md:w-full h-15 hover:cursor-pointer group mt-0 md:mt-4 flex flex-col items-center justify-center' onClick={() => { navigate('/authors') }}>
                    <div className={`flex align-middle justify-center ${currURL === '/authors' ? 'fill-purple-500' : 'fill-white group-hover:fill-purple-500 transition-all'} `}>
                        <svg className="h-6 w-6 md:h-7 lg:h-[2.3vw] lg:w-auto" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24"><path d="M12 10C14.2091 10 16 8.20914 16 6 16 3.79086 14.2091 2 12 2 9.79086 2 8 3.79086 8 6 8 8.20914 9.79086 10 12 10ZM5.5 13C6.88071 13 8 11.8807 8 10.5 8 9.11929 6.88071 8 5.5 8 4.11929 8 3 9.11929 3 10.5 3 11.8807 4.11929 13 5.5 13ZM21 10.5C21 11.8807 19.8807 13 18.5 13 17.1193 13 16 11.8807 16 10.5 16 9.11929 17.1193 8 18.5 8 19.8807 8 21 9.11929 21 10.5ZM12 11C14.7614 11 17 13.2386 17 16V22H7V16C7 13.2386 9.23858 11 12 11ZM5 15.9999C5 15.307 5.10067 14.6376 5.28818 14.0056L5.11864 14.0204C3.36503 14.2104 2 15.6958 2 17.4999V21.9999H5V15.9999ZM22 21.9999V17.4999C22 15.6378 20.5459 14.1153 18.7118 14.0056 18.8993 14.6376 19 15.307 19 15.9999V21.9999H22Z"></path></svg>
                    </div>
                    <div className={`vt323-regular flex items-center justify-center transition-colors duration-300 text-[10px] md:text-sm lg:text-base ${currURL === '/authors' ? 'text-purple-500' : 'text-white group-hover:text-purple-500'}`}>
                        Authors
                    </div>
                </div>
            </div>

        </nav>
    )
}

export default Navbar