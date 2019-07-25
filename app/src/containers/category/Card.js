// import React from 'react'
// import { getProductImageLink } from '../../utils/imageUtils';

// export default function Welcome(props) {
//     console.log(getProductImageLink(props.item), "hejs")
//     return (
//         <div className="max-w-sm w-full lg:max-w-full lg:flex">
//             <div className="h-48 lg:h-auto lg:w-48 flex-none bg-cover rounded-t lg:rounded-t-none lg:rounded-l text-center overflow-hidden" style={{backgroundImage:  "url(" + getProductImageLink(props.item)+ ")"  }} title="Woman holding a mug">
//             </div>
//             <div className="border-r border-b border-l border-gray-400 lg:border-l-0 lg:border-t lg:border-gray-400 bg-white rounded-b lg:rounded-b-none lg:rounded-r p-4 flex flex-col justify-between leading-normal">
//                 <div className="mb-8">
//                 <p className="text-sm text-gray-600 flex items-center">
//                     <svg className="fill-current text-gray-500 w-3 h-3 mr-2" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20">
//                     <path d="M4 8V6a6 6 0 1 1 12 0v2h1a2 2 0 0 1 2 2v8a2 2 0 0 1-2 2H3a2 2 0 0 1-2-2v-8c0-1.1.9-2 2-2h1zm5 6.73V17h2v-2.27a2 2 0 1 0-2 0zM7 6v2h6V6a3 3 0 0 0-6 0z" />
//                     </svg>
//                     Members only
//                 </p>
//                 <div className="text-gray-900 font-bold text-xl mb-2">{props.item.name}</div>
//                 </div>
//                 <div className="flex items-center">
//                 <img className="w-10 h-10 rounded-full mr-4" src="/img/jonathan.jpg" alt="Avatar of Jonathan Reinink" />
//                 <div className="text-sm">
//                     <p className="text-gray-900 leading-none">fr. {props.item.cheapestPrice.amount} kr</p>
//                 </div>
//                 </div>
//             </div>
//         </div>
//     )
//   }


import React from 'react'
import { getProductImageLink } from '../../utils/imageUtils';
import styles from './Card.module.css'; 

export default function Card(props) {
    console.log(getProductImageLink(props.item), "hejs")
    return (
        <div className="container">
                <div class="card row flex-row">
                    <div className="image col-3">
                        <img src={getProductImageLink(props.item)} alt={props.item.name} className={styles.small}/>
                    </div>
                    <div className="card-body col-8 ml-4">
                        <h5 class="card-title">{props.item.name}</h5>
                        <div className="d-none d-md-flex d-lg-flex">
                            <p className="card-text pt-3">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
                        </div>
                        <div className="d-flex align-items-end" style={{height: 100}}>
                            <div>
                                fr. {props.item.cheapestPrice.amount} kr
                            </div>
                            <div className="ml-5">
                                 {props.item.numberOfMerchants} butiker
                            </div>
                        </div>
                    </div>
                </div>
        </div>
    )
  }