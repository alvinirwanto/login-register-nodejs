// // import { useState, useEffect } from 'react'
// // import axios from 'axios'

// // const apiData = "http://localhost:5000/user"

// // export default function Success() {
// //     const [data, setData] = useState([])

// //     useEffect(() => {
// //         getData()
// //     }, [])

// //     const getData = async () => {
// //         // Using axios
// //         const response = await axios.get(apiData)
// //         const jsonData = await response.data

// //         setData(jsonData)
// //     }
// //     return (
// //         <div>
// //             {
// //                 data.map((user) => (
// //                     <div className='flex gap-5'>
// //                         <span>{user.username}</span>
// //                         <span>{user.email}</span>
// //                         <span>{user.role}</span>
// //                         <span>{user.role2}</span>
// //                         <span>{user.role3}</span>
// //                         <span>{user.role4}</span>
// //                         <span>{user.role5}</span>
// //                         <span>{user.role6}</span>
// //                         <span>{user.role7}</span>
// //                     </div>
// //                 ))
// //             }
// //         </div>
// //     )
// // }

// import { useState } from 'react';

// export default function Success() {
//     const [formState, setFormState] = useState({
//         name: '',
//         email: '',
//         role: []
//     });

//     const handleChange = (event) => {
//         const { name, value, checked } = event.target;

//         if (name === 'role') {
//             const updatedItems = checked ? [...formState.role, value] : formState.role.filter(item => item !== value);

//             setFormState(prevState => ({
//                 ...prevState,
//                 [name]: updatedItems
//             }));
//         } else {
//             setFormState(prevState => ({
//                 ...prevState,
//                 [name]: value
//             }));
//         }
//     }

//     // let userNames = ['harry22', 'albert12', 'bonsaii24', 'deeksha25', undefined, null];
//     // let filtered = userNames.includes('harry2')
//     // console.log(filtered)
//     // // console.log(formState.role)
//     // const roleUser = formState.role

//     console.log(formState)

//     return (
//         <div>
//             <label htmlFor="nameInput">Name:</label>
//             <input type="text" name="name" onChange={handleChange} />

//             <label htmlFor="nameInput">Email:</label>
//             <input type="text" name="email" onChange={handleChange} />

//             <label>
//                 <input type="checkbox" name="role" value="marketing" checked={formState.role.includes('marketing')} onChange={handleChange} />
//                 Marketing
//             </label>

//             <label>
//                 <input type="checkbox" name="role" value="mahasiswa" checked={formState.role.includes('mahasiswa')} onChange={handleChange} />
//                 Mahasiswa
//             </label>

//             {/* <div className={roleUser.includes('harry22') ? 'block' : 'hidden'}>
//                 <p>hello</p>
//             </div> */}

//             <button type="submit">Submit</button>
//         </div>
//     );
// }

import { Accordion, AccordionItem as Item } from '@szhsin/react-accordion';
import { MdKeyboardArrowDown } from 'react-icons/md';

import styles from '../styles.module.css'

// const AccordionItem = ({ header, ...rest }) => (
//     <Item
//         {...rest}
//         header={
//             <>
//                 {header}
//                 <MdKeyboardArrowDown/>
//             </>
//         }
//     />
// );

export default function Success() {
    const AccordionItem = ({ header, ...rest }) => (
        <Item
            {...rest}
            header={
                <>
                    {header}
                    <MdKeyboardArrowDown className={styles.chevron} />
                </>
            }
            className={styles.item}
            buttonProps={{
                className: ({ isEnter }) =>
                    `${styles.itemBtn} ${isEnter && styles.itemBtnExpanded}`
            }}
            contentProps={{ className: styles.itemContent }}
            panelProps={{ className: styles.itemPanel }}
        />
    );

    return (
        <Accordion>
            <AccordionItem header="What is Lorem Ipsum?">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed
                do eiusmod tempor incididunt ut labore et dolore magna aliqua.
            </AccordionItem>

            <AccordionItem header="Where does it come from?">
                Quisque eget luctus mi, vehicula mollis lorem. Proin fringilla
                vel erat quis sodales. Nam ex enim, eleifend venenatis lectus
                vitae, accumsan auctor mi.
            </AccordionItem>

            <AccordionItem header="Why do we use it?">
                Suspendisse massa risus, pretium id interdum in, dictum sit
                amet ante. Fusce vulputate purus sed tempus feugiat.
            </AccordionItem>
        </Accordion>
    );
}