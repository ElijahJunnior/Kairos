import { HelloWorld } from '../components/HelloWorld/index';

import '../styles/home.scss';

import iconImg from '../assets/images/icon.png';

export function Home() {
    return (
        <div className="homeContent">
            <header>
                <div className="content">
                    {/* <img src={iconImg} /> */}
                </div>
            </header>
            <main>
                <aside className="banner">

                </aside>
                <div className="login">

                </div>
            </main>
        </div>
    )
}
