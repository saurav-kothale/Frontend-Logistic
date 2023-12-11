const Header = () => {
  return (
    <div>
      <header className="p-3 " style={{ backgroundColor: "#3f51b5" }}>
        <div className="container">
          <div className="d-flex flex-wrap align-items-center justify-content-center justify-content-lg-start">
            <a
              href="/"
              className="d-flex align-items-center mb-2 mb-lg-0 text-white text-decoration-none"
            >
              <svg
                className="bi me-2"
                width="40"
                height="32"
                role="img"
                aria-label="Bootstrap"
              >
                <use xlinkHref="#bootstrap"></use>
              </svg>
            </a>

            
            
          </div>
        </div>
      </header>
    </div>
  );
};

export default Header;
