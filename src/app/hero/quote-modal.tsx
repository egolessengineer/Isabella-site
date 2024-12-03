import { forwardFormdata } from "@/apis/forwardFormdata";
import {
  Modal,
  ModalContent,
  ModalHeader,
  ModalBody,
  ModalFooter,
  Button,
  Input,
  Textarea,
} from "@nextui-org/react";
import { useMemo, useState } from "react";

const QuoteModal = ({
  isOpen,
  onClose,
}: {
  isOpen: boolean;
  onClose: () => void;
}) => {
  const [firstname, setFirstname] = useState<string>("");
  const [lastname, setLastname] = useState<string>("");
  const [mail, setMail] = useState<string>("");
  const [message, setMessage] = useState<string>("");
  const validateFirstname = (firstname: string) => {
    return firstname.length > 0;
  };
  const validateLastname = (lastname: string) => {
    return lastname.length > 0;
  };
  const validateMessage = (message: string) => {
    return message.length > 0;
  };
  const validateEmail = (mail: string) =>
    mail.match(/^[A-Z0-9._%+-]+@[A-Z0-9.-]+.[A-Z]{2,4}$/i);
  const isFirstnameInvalid = useMemo(() => {
    // if (firstname === "") return false;

    return validateFirstname(firstname) ? false : true;
  }, [firstname]);
  const isLastnameInvalid = useMemo(() => {
    // if (lastname === "") return false;

    return validateLastname(lastname) ? false : true;
  }, [lastname]);
  const isMessageInvalid = useMemo(() => {
    if (message === "") return false;

    return validateMessage(message) ? false : true;
  }, [message]);
  const isEmailInvalid = useMemo(() => {
    if (mail === "") return false;

    return validateEmail(mail) ? false : true;
  }, [mail]);

  //   useEffect(() => {
  //     console.log("forward-content:", {
  //       firstname: firstname,
  //       lastname: lastname,
  //       message: message,
  //       mail: mail,
  //     });
  //     console.log("validatefirstname", validateFirstname(firstname));
  //   }, [firstname, lastname, mail, message]);
  return (
    <>
      <Modal
        size={"md"}
        isOpen={isOpen}
        onClose={onClose}
        backdrop="blur"
        placement="center"
        className="mx-3 font-rubik"
        // radius="lg"
        // classNames={{
        //   body: "py-6",
        //   backdrop: "bg-[#292f46]/50 backdrop-opacity-40",
        //   base: "border-[#292f46] bg-[#19172c] dark:bg-[#19172c] text-[#a8b0d3]",
        //   header: "border-b-[1px] border-[#292f46]",
        //   footer: "border-t-[1px] border-[#292f46]",
        //   closeButton: "hover:bg-white/5 active:bg-white/10",
        // }}
        motionProps={{
          variants: {
            enter: {
              y: 0,
              opacity: 1,
              transition: {
                duration: 0.3,
                ease: "easeOut",
              },
            },
            exit: {
              y: -20,
              opacity: 0,
              transition: {
                duration: 0.2,
                ease: "easeIn",
              },
            },
          },
        }}
      >
        <ModalContent>
          {(onClose) => (
            <>
              <ModalHeader className="flex flex-col gap-1">
                Enter your details
              </ModalHeader>
              <ModalBody className="flex flex-col gap-6">
                <div className="flex flex-col items-start gap-2">
                  <Input
                    type="name"
                    label="*First name"
                    placeholder="John"
                    labelPlacement="outside"
                    value={firstname}
                    onValueChange={setFirstname}
                  />
                  {isFirstnameInvalid && (
                    <div className="text-sm text-red-500">
                      First name required
                    </div>
                  )}
                </div>
                <div className="flex flex-col items-start gap-2">
                  <Input
                    type="name"
                    label="*Last name"
                    placeholder="Doe"
                    labelPlacement="outside"
                    value={lastname}
                    onValueChange={setLastname}
                  />
                  {isLastnameInvalid && (
                    <div className="text-sm text-red-500">
                      Last name required
                    </div>
                  )}
                </div>
                <div className="flex flex-col items-start gap-2">
                  <Input
                    type="email"
                    label="*Email"
                    placeholder="you@company.com"
                    labelPlacement="outside"
                    value={mail}
                    onValueChange={setMail}
                  />
                  {isEmailInvalid && (
                    <div className="text-sm text-red-500">Invalid email</div>
                  )}
                </div>
                {/* <Input
                  type="number"
                  label="Phone number"
                  placeholder="+1(555) 000-0000"
                  labelPlacement="outside"
                /> */}
                {/* <Input
                  type="email"
                  label="Type of Property"
                  placeholder="you@company.com"
                  labelPlacement="outside"
                /> */}
                <div className="flex flex-col items-start gap-1">
                  <Textarea
                    label=""
                    errorMessage="Please leave your message"
                    placeholder="Message shouldn't be empty."
                    labelPlacement="outside"
                    value={message}
                    onValueChange={setMessage}
                  />
                  {isMessageInvalid && (
                    <div className="text-sm text-red-500">Invalid message</div>
                  )}
                </div>
              </ModalBody>
              <ModalFooter>
                <Button
                  className="w-full bg-purple-700 rounded-full justify-center"
                  color="primary"
                  onPress={() => {
                    if (
                      !isFirstnameInvalid &&
                      !isLastnameInvalid &&
                      !isEmailInvalid &&
                      mail !== "" &&
                      message !== "" &&
                      !isLastnameInvalid
                    ) {
                      forwardFormdata(firstname, lastname, mail, message);
                      setFirstname("");
                      setLastname("");
                      setMail("");
                      setMessage("");
                      onClose();
                    }
                  }}
                >
                  Submit
                </Button>
              </ModalFooter>
            </>
          )}
        </ModalContent>
      </Modal>
    </>
  );
};

export default QuoteModal;
