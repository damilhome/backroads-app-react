import { pageLinks } from '../data'
import PageLink from './PageLink'

const PageLinks = ({ parentId, parentClass, itemClass }) => {
    return (
        <ul className={parentClass} id={parentId}>
            {pageLinks.map((link) => {
                return (
                    <PageLink key={link.id} link={link} itemClass={itemClass} />
                )
            })}
        </ul>
    )
}
export default PageLinks
