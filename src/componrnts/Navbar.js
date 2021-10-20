import styles from './Navbar.module.css';

const Navbar = () => {
    const menuItems = [
        {
            name: 'Online Courses',
            Class: 'navbar-link',
            href: '#'
        },
        {
            name: 'We are hiring',
            Class: 'navbar-link',
            href: '#'
        },
        {
            name: 'More',
            Class: 'navbar-link',
            href: '#'
        }
    ]
    return (
        <nav className={styles.navbarItems}>
            <ul>
            <a href='#' className={styles.home}>Home</a>
                {menuItems.map((item, index) => {
                    return (
                        <li key={index}>
                            <a href={item.href} className={styles.navbarLink}>
                                {item.name}
                            </a>
                        </li>
                    )
                })}
            </ul>
        </nav>
    )

}

export default Navbar;