export default function Header() {
    return (
        <header className="header-bar bg-primary mb-3">
            <div className="container d-flex flex-column flex-md-row align-items-center p-3">
                <h4 className="my-0 mr-md-auto font-weight-normal">
                    <a href="/" className="text-white">
                        ComplexApp
                    </a>
                </h4>
                <div className="flex-row my-3 my-md-0">
                    <a href="#" className="text-white mr-2 header-search-icon">
                        <i className="fas fa-search"></i>
                    </a>
                    <span className="mr-2 header-chat-icon text-white">
            <i className="fas fa-comment"></i>
            <span className="chat-count-badge text-white"> </span>
          </span>
                    <a href="#" className="mr-2">
                        <img className="small-header-avatar"
                             src="https://gravatar.com/avatar/b9408a09298632b5151200f3449434ef?s=128"/>
                    </a>
                    <a className="btn btn-sm btn-success mr-2" href="/create-post">
                        Create Post
                    </a>
                    <button className="btn btn-sm btn-secondary">
                        Sign Out
                    </button>
                </div>
            </div>
        </header>
    )
}