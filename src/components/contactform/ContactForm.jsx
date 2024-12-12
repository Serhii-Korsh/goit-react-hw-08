import { useDispatch, useSelector } from "react-redux";
import { addContact } from "../../redux/contacts/operations";
import { selectContacts } from "../../redux/contacts/selectors";
import { Formik, Form, Field, ErrorMessage } from "formik";
import * as Yup from "yup";
import toast from "react-hot-toast"; // For user feedback
import s from "./ContactForm.module.css";

const ContactForm = () => {
  const dispatch = useDispatch();
  const contacts = useSelector(selectContacts);

  const initialValues = { name: "", number: "" };

  const validationSchema = Yup.object({
    name: Yup.string().min(3).max(50).required("Name is required"),
    number: Yup.string()
      .matches(/^\+?\d{10,15}$/, "Invalid phone number")
      .required("Number is required"),
  });

  const handleSubmit = (values, { resetForm }) => {
    const duplicate = contacts.some(
      (contact) => contact.name.toLowerCase() === values.name.toLowerCase()
    );
    if (duplicate) {
      toast.error(`${values.name} is already in your contacts.`);
      return;
    }

    dispatch(addContact(values));
    resetForm();
    toast.success("Contact added successfully!");
  };

  return (
    <Formik
      initialValues={initialValues}
      validationSchema={validationSchema}
      onSubmit={handleSubmit}
    >
      <Form className={s.form}>
        <label className={s.label}>
          Name
          <Field type="text" name="name" className={s.field} />
          <ErrorMessage name="name" component="div" className={s.message} />
        </label>
        <label className={s.label}>
          Number
          <Field type="text" name="number" className={s.field} />
          <ErrorMessage name="number" component="div" className={s.message} />
        </label>
        <button type="submit" className={s.btn}>
          Add contact
        </button>
      </Form>
    </Formik>
  );
};

export default ContactForm;

// import { useDispatch } from "react-redux";
// import { addContact } from "../../redux/contactsOps";
// import { Formik, Form, Field, ErrorMessage } from "formik";
// import * as Yup from "yup";
// import s from "./ContactForm.module.css";

// const ContactForm = () => {
//   const dispatch = useDispatch();

//   const initialValues = { name: "", number: "" };

//   const validationSchema = Yup.object({
//     name: Yup.string().min(3).max(50).required("Name is required"),
//     number: Yup.string().min(3).max(50).required("Number is required"),
//   });

//   const handleSubmit = (values, { resetForm }) => {
//     dispatch(addContact(values));
//     resetForm();
//   };

//   return (
//     <Formik
//       initialValues={initialValues}
//       validationSchema={validationSchema}
//       onSubmit={handleSubmit}
//     >
//       <Form className={s.form}>
//         <label className={s.label}>
//           Name
//           <Field type="text" name="name" className={s.field} />
//           <ErrorMessage name="name" component="div" className={s.message} />
//         </label>
//         <label className={s.label}>
//           Number
//           <Field type="text" name="number" className={s.field} />
//           <ErrorMessage name="number" component="div" className={s.message} />
//         </label>
//         <button type="submit" className={s.btn}>
//           Add contact
//         </button>
//       </Form>
//     </Formik>
//   );
// };

// export default ContactForm;
