import { HelloWorld } from '../components/HelloWorld/index';

import '../styles/home.scss';

import iconImg from '../assets/images/icon.png';

export function Home() {
    return (
        <div className="homeContent">
            <header>
                <div className="content">
                    <img src={iconImg} />
                </div>
            </header>
            <main>
                <aside className="banner">

                </aside>
                <div className="login">
                    <div className='loginContent'>
                        <h2>Login</h2>
                        <form>
                            <input type='text' placeholder='Informe o seu E-mail' />
                            <input type='password' placeholder='Informe a seu E-mail' />
                            <button type='submit'> Login </button>
                        </form>
                        <aside> Não possui uma conta? <a href=""> Cadastre-Se</a> </aside>
                        <div className='separator' > ou </div>
                        <div className='externalAlth'>
                            <button type='button'> Google </button>
                            <button type='button'> Facebook </button>
                            <button type='button'> Twitter </button>
                        </div>
                    </div>
                </div>
            </main>
        </div>
    )
}
