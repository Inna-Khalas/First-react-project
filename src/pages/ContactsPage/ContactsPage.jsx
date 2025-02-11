import { BallTriangle } from "react-loader-spinner";
import ContactForm from "../../components/ContactForm/ContactForm";
import ContactList from "../../components/ContactList/ContactList";
import SearchBar from "../../components/SearchBar/SearchBar";
import { useDispatch, useSelector } from "react-redux";
import { useEffect } from "react";
import { fetchContacts } from "../../redux/contacts/operations";
import { selectIsLoading } from "../../redux/selectors";

function ContactsPage() {
  const dispatch = useDispatch();
  const isLoading = useSelector(selectIsLoading);

  useEffect(() => {
    dispatch(fetchContacts());
  }, [dispatch]);

  return (
    <div className="space-y-10 p-6 bg-blue-100 wrapper">
      <div className="flex items-end  justify-center gap-16 w-full  mx-auto">
        <ContactForm />
        <SearchBar />
      </div>
      <div className="mt-12">
        {isLoading ? (
          <div className="flex justify-center items-center">
            <BallTriangle color="#4B93F5" height={100} width={100} />
          </div>
        ) : (
          <ContactList />
        )}
      </div>
    </div>
  );
}

export default ContactsPage;
