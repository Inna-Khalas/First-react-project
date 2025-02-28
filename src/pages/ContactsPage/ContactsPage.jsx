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
    <div className="container mx-auto p-6 bg-gray-50 min-h-screen flex flex-col items-center">
      <div className="w-full max-w-3xl space-y-6 md:space-y-0 md:grid md:grid-cols-2 md:gap-6">
        <ContactForm />
        <SearchBar />
      </div>

      <div className="w-full max-w-3xl mt-12 bg-white shadow-lg rounded-xl p-6">
        {isLoading ? (
          <div className="flex justify-center py-20">
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
