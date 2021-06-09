// import React from 'react';
// import ReactDOM from 'react-dom';
// import { Field, Formik } from 'formik';
// import * as Yup from 'yup';
// import MaskedInput from 'react-text-mask';
// import { useDropzone } from 'react-dropzone';
//
// const phoneNumberMask = [
//     '+',
//     '7',
//     '(',
//     /[1-9]/,
//     /\d/,
//     /\d/,
//     ')',
//     ' ',
//     /\d/,
//     /\d/,
//     /\d/,
//     '-',
//     /\d/,
//     /\d/,
//     /\d/,
//     /\d/,
// ];
// // load files with formik and dropzone
// // https://coderoad.ru/59128693/%D0%97%D0%B0%D0%B3%D1%80%D1%83%D0%B7%D0%BA%D0%B0-%D1%84%D0%B0%D0%B9%D0%BB%D0%BE%D0%B2-%D0%B2-react-%D1%81-%D0%BF%D0%BE%D0%BC%D0%BE%D1%89%D1%8C%D1%8E-react-dropzone-%D0%B8-formik
// const CaptureForm = () => {
//     // const [submitErrors, setSubmitErrors] = useState<{
//     //   id: string;
//     //   message: string;
//     // }[] | null>();
//
//     const onSubmit = async (_values, {}) => {};
//
//     const { acceptedFiles, getRootProps, getInputProps } = useDropzone();
//
//     const files = acceptedFiles.map((file) => (
//         <li key={file?.path}>
//             {file?.path} - {file.size} bytes
//         </li>
//     ));
//     return (
//         <Formik
//             validationSchema={Yup.object({
//                 firstName: Yup.string().required('Поле обязательно'),
//                 lastName: Yup.string().required('Поле обязательно'),
//                 email: Yup.string()
//                     .email('Неправильный email')
//                     .required('Поле обязательно'),
//                 phone: Yup.string().required('Поле обязательно'),
//             })}
//             initialValues={{
//                 email: '',
//                 phone: '',
//                 firstName: '',
//                 lastName: '',
//             }}
//             onSubmit={onSubmit}
//         >
//             {(props) => {
//                 const {
//                     values,
//                     errors,
//                     touched,
//                     handleChange,
//                     handleBlur,
//                     handleSubmit,
//                     isSubmitting,
//                 } = props;
//                 return (
//                     <form onSubmit={handleSubmit}>
//                         <div className="input captureForm__input input--white ">
//                             <input
//                                 className="input__field"
//                                 type="text"
//                                 required
//                                 placeholder="Имя"
//                                 onChange={handleChange}
//                                 onBlur={handleBlur}
//                                 value={values.firstName}
//                                 name={'firstName'}
//                             />
//                             <div className="input__placeholder">Имя</div>
//                             {(errors.firstName ||
//                                 touched.firstName ||
//                                 errors.firstName) && (
//                                 <div className="input__error">
//                                     {errors.firstName &&
//                                         touched.firstName &&
//                                         errors.firstName}
//                                 </div>
//                             )}
//                         </div>
//                         <div className="input captureForm__input input--white ">
//                             <input
//                                 className="input__field"
//                                 type="text"
//                                 required
//                                 placeholder="Фамилия"
//                                 onChange={handleChange}
//                                 onBlur={handleBlur}
//                                 value={values.lastName}
//                                 name={'lastName'}
//                             />
//                             <div className="input__placeholder">Фамилия</div>
//                             {(errors.lastName ||
//                                 touched.lastName ||
//                                 errors.lastName) && (
//                                 <div className="input__error">
//                                     {errors.lastName &&
//                                         touched.lastName &&
//                                         errors.lastName}
//                                 </div>
//                             )}
//                         </div>
//                         <div className="input captureForm__input input--white ">
//                             <input
//                                 className="input__field"
//                                 type="text"
//                                 required
//                                 placeholder="E-mail"
//                                 onChange={handleChange}
//                                 onBlur={handleBlur}
//                                 value={values.email}
//                                 name={'email'}
//                             />
//                             <div className="input__placeholder">E-mail</div>
//                             {(errors.email ||
//                                 touched.email ||
//                                 errors.email) && (
//                                 <div className="input__error">
//                                     {errors.email &&
//                                         touched.email &&
//                                         errors.email}
//                                 </div>
//                             )}
//                         </div>
//                         <div className="input captureForm__input input--white ">
//                             <Field
//                                 render={({ field }) => (
//                                     <MaskedInput
//                                         {...field}
//                                         name={'phone'}
//                                         mask={phoneNumberMask}
//                                         placeholder="Телефон"
//                                         type="text"
//                                         onChange={handleChange}
//                                         onBlur={handleBlur}
//                                         className="input__field"
//                                         required
//                                         value={values.phone}
//                                     />
//                                 )}
//                             />
//
//                             <div className="input__placeholder">Телефон</div>
//                             {(errors.phone ||
//                                 touched.phone ||
//                                 errors.phone) && (
//                                 <div className="input__error">
//                                     {errors.phone &&
//                                         touched.phone &&
//                                         errors.phone}
//                                 </div>
//                             )}
//                         </div>
//                         <div
//                             {...getRootProps({
//                                 className: 'captureForm__dropZone',
//                             })}
//                         >
//                             <input {...getInputProps()} />
//                             <p>Прикрепить файл</p>
//                         </div>
//                         {files.length > 0 && (
//                             <div className={'captureForm__filesList'}>
//                                 <div className={'title'}>Файлы</div>
//                                 <ul>{files}</ul>
//                             </div>
//                         )}
//
//                         <button
//                             className="button button--white captureForm__submit"
//                             disabled={isSubmitting}
//                             type="submit"
//                         >
//                             <span>Отправить заявку</span>
//                         </button>
//                     </form>
//                 );
//             }}
//         </Formik>
//     );
// };
//
// ReactDOM.render(<CaptureForm />, document.getElementById('captureForm__form'));
