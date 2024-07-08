import Aside from './Login & Signup/Aside'
import Header from './Header';

const Shared = () => {
    return (
        <div className="d-flex flex-column flex-lg-row h-lg-full bg-surface-secondary">

            <Aside />
            <div className="h-screen flex-grow-1 overflow-y-lg-auto">
                <Header />
                <main className="py-6 bg-surface-secondary">
                    <h1>Shared</h1>
                </main>
            </div>
        </div >
    )
}

export default Shared