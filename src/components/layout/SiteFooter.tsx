import { portfolio } from '../../data/portfolio'

export function SiteFooter() {
  const currentYear = new Date().getFullYear()

  return (
    <footer className="site-footer">
      <div className="container site-footer__inner">
        <div>
          <p className="site-footer__name">{portfolio.name}</p>
          <p className="site-footer__note">{portfolio.footer.note}</p>
        </div>
        <div className="site-footer__closing">
          <p>
            © {currentYear} {portfolio.name}
          </p>
          <a href="#home">{portfolio.footer.backToTopLabel}</a>
        </div>
      </div>
    </footer>
  )
}
