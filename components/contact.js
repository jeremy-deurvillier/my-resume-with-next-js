/* ** Affiche une liste d'éléments de contact (par exemple: téléphone, adresse mail ...).
* Prends un nom de classe CSS comme props, utile en fonction de l'emplacement du composant.
* */

import React from 'react'
import {contact} from '../datas/input'

class Contact extends React.Component {

	/* ** Constructeur.
	* */
	constructor(props) {
		super(props)

		this.cssClass = props.cssClass?props.cssClass:'contact-list'
		this.contactList = contact
	}

	/* ** Parcours la liste des éléments de contact.
	* 
	* @return Array Un tableau d'éléments JSX.
	* */
	forEachContactList() {
		let list = []
		let iconsList = {'tel': 'phone', 'mailto': 'email', 'link': 'link'}
		let item = 0, numStr = 0
		let contact = null, elm = null, href = null, target = null

		for (contact in this.contactList) {
			item ++
			href = contact != 'link'?contact + ':':''
			target = contact == 'link'?'_blank':'_self'
			
			this.contactList[contact].map((str) => {
				numStr ++

				elm = <div key={item + '-' + numStr} className='single-link'>
					<i className='material-icons'>{iconsList[contact]}</i>
					<a href={href+str} target={target}>
						{str}
					</a>
				</div>

				list.push(elm)
			})
		}

		return list
	}

	/* ** Rendu du composant.
	*
	* @return JSX Un élément JSX pour l'affichage.
	* */
	render() {
		return (
			<address className={this.cssClass}>
				{this.forEachContactList()}
			</address>
		)
	}
}

export default Contact
