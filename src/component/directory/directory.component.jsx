import React from "react";
import "./directory.styles.scss"
import { MenuItem } from "../menu-item/menu-item.component";

export class Directory extends React.Component {
    constructor() {
        super()
        this.state = {
            sections: [
                {
                    title: 'Hats',
                    imageUrl: 'https://i.ibb.co/cvpntL1/hats.png',
                    id: 1
                },
                {
                    title: 'Jackets',
                    imageUrl: 'https://i.ibb.co/px2tCc3/jackets.png',
                    id: 2
                },
                {
                    title: 'Sneakers',
                    imageUrl: 'https://i.ibb.co/0jqHpnp/sneakers.png',
                    id: 3
                },
                {
                    title: 'Womens',
                    imageUrl: 'https://i.ibb.co/GCCdy8t/womens.png',
                    size: 'large',
                    id: 4
                },
                {
                    title: 'Mens',
                    imageUrl: 'https://i.ibb.co/R70vBrQ/men.png',
                    size: 'large',
                    id: 5
                }
            ]
        }
    }

    render() {
        const section = this.state.sections
        return (
            <div className='directory-menu'>

                {section.map(sec => {
                    return (
                        <MenuItem key={sec.id} title={sec.title} imageUrl={sec.imageUrl} size={sec.size} />
                    )
                })}

            </div>

        )
    }
}