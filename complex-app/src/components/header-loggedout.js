import Axios from 'axios';
export default function HeaderLoggedout() {
    async function handleSubmit(e) {
        e.preventDefault();
        try {
            await Axios.post('http://localhost:8080/login', {
                'username': 'test',
                'password': 'pwd'
            })
            console.log('success');
        } catch (e) {
            console.log('error');
        }
    }

    return (
        <header className="header-bar bg-primary mb-3">
            <div className="container d-flex flex-column flex-md-row align-items-center p-3">
                <h4 className="my-0 mr-md-auto font-weight-normal">
                    <a href="/" className="text-white">
                        ComplexApp
                    </a>
                </h4>
                <form className="mb-0 pt-2 pt-md-0">
                    <div className="row align-items-center">
                        <div className="col-md mr-0 pr-md-0 mb-3 mb-md-0">
                            <input name="username" className="form-control form-control-sm input-dark" type="text"
                                   placeholder="Username" autoComplete="off"/>
                        </div>
                        <div className="col-md mr-0 pr-md-0 mb-3 mb-md-0">
                            <input name="password" className="form-control form-control-sm input-dark" type="password"
                                   placeholder="Password"/>
                        </div>
                        <div className="col-md-auto">
                            <button className="btn btn-success btn-sm" onClick={handleSubmit}>Sign In</button>
                        </div>
                    </div>
                </form>
            </div>
        </header>
    )
}