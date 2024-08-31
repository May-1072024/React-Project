import { MouseEvent, useState } from "react";

export const SubmitForm = () => {
    const [firstName, setFirstName] = useState("");
    const [lastName, setLastName] = useState("");
    const [email, setEmail] = useState("");
    const [contact, setContact] = useState("");
    const [gender, setGender] = useState("male");
    const [subjects, setSubjects] = useState({
        english: true,
        maths: false,
        physics: false,
    });
    const [resume, setResume] = useState<File | null>(null);
    const [url, setUrl] = useState("");
    const [selectOption, setSelectOption] = useState("");
    const [about, setAbout] = useState("");

    const handleSubjectChange = (sub: keyof typeof subjects) => {
        setSubjects((prev) => ({
            ...prev,
            [sub]: !prev[sub],
        }));
    };

    const handleSubmit = (e: MouseEvent<HTMLButtonElement>) => {
        e.preventDefault();
        console.log({
            firstName,
            lastName,
            email,
            contact,
            gender,
            subjects,
            resume,
            url,
            selectOption,
            about,
        });
    };

    const handleReset = () => {
        setFirstName("");
        setLastName("");
        setEmail("");
        setContact("");
        setGender("male");
        setSubjects({
            english: true,
            maths: false,
            physics: false,
        });
        setResume(null);
        setUrl("");
        setSelectOption("");
        setAbout("");
    };

    return (
        <div>
            <h1>Form in React</h1>
            <fieldset>
                <form action="#" method="get">
                    <label htmlFor="firstName">First Name*</label>
                    <input
                        type="text"
                        name="firstName"
                        id="firstName"
                        value={firstName}
                        onChange={(e) => setFirstName(e.target.value)}
                        placeholder="Enter Your First Name"
                    />
                    <label htmlFor="lastName">Last Name*</label>
                    <input
                        type="text"
                        name="lastName"
                        id="lastName"
                        value={lastName}
                        onChange={(e) => setLastName(e.target.value)}
                        placeholder="Enter Your Last Name"
                    />
                    <label htmlFor="email">Enter Email*</label>
                    <input
                        type="email"
                        name="email"
                        id="email"
                        value={email}
                        onChange={(e) => setEmail(e.target.value)}
                        placeholder="Enter Your Email"
                        required
                    />
                    <label htmlFor="contact">Contact*</label>
                    <input
                        type="tel"
                        name="contact"
                        id="contact"
                        value={contact}
                        onChange={(e) => setContact(e.target.value)}
                        placeholder="Enter Mobile Number"
                        required
                    />
                    <label htmlFor="gender">Gender*</label>
                    <input
                        type="radio"
                        name="gender"
                        value="male"
                        id="male"
                        checked={gender === "male"}
                        onChange={(e) => setGender(e.target.value)}
                    /> Male
                    <input
                        type="radio"
                        name="gender"
                        value="female"
                        id="female"
                        checked={gender === "female"}
                        onChange={(e) => setGender(e.target.value)}
                    /> Female
                    <input
                        type="radio"
                        name="gender"
                        value="other"
                        id="other"
                        checked={gender === "other"}
                        onChange={(e) => setGender(e.target.value)}
                    /> Other
                    <label htmlFor="subjects">Your Best Subject*</label>
                    <input
                        type="checkbox"
                        name="subjects"
                        id="english"
                        checked={subjects.english}
                        onChange={() => handleSubjectChange("english")}
                    /> English
                    <input
                        type="checkbox"
                        name="subjects"
                        id="maths"
                        checked={subjects.maths}
                        onChange={() => handleSubjectChange("maths")}
                    /> Maths
                    <input
                        type="checkbox"
                        name="subjects"
                        id="physics"
                        checked={subjects.physics}
                        onChange={() => handleSubjectChange("physics")}
                    /> Physics
                    <label htmlFor="file">Upload Resume*</label>
                    <input
                        type="file"
                        id="file"
                        name="file"
                        onChange={(e) =>
                            setResume(e.target.files ? e.target.files[0] : null)
                        }
                        placeholder="Upload File"
                        required
                    />
                    <label htmlFor="url">URL</label>
                    <input
                        type="url"
                        id="url"
                        name="url"
                        value={url}
                        onChange={(e) => setUrl(e.target.value)}
                        placeholder="Enter a URL"
                    />
                    <label htmlFor="selectOption">Select Your Choice</label>
                    <select
                        name="selectOption"
                        id="selectOption"
                        value={selectOption}
                        onChange={(e) => setSelectOption(e.target.value)}
                    >
                        <option value="" disabled>
                            Select Your Option
                        </option>
                        <optgroup label="Beginner">
                            <option value="HTML">HTML</option>
                            <option value="CSS">CSS</option>
                            <option value="JavaScript">JavaScript</option>
                        </optgroup>
                        <optgroup label="Advanced">
                            <option value="React">React</option>
                            <option value="Node">Node</option>
                            <option value="Express">Express</option>
                            <option value="MongoDB">MongoDB</option>
                        </optgroup>
                    </select>
                    <label htmlFor="about">About</label>
                    <textarea
                        name="about"
                        id="about"
                        cols={30}
                        rows={10}
                        value={about}
                        onChange={(e) => setAbout(e.target.value)}
                        placeholder="About Yourself"
                        required
                    ></textarea>
                    <button type="reset" onClick={handleReset}>
                        Reset
                    </button>
                    <button type="submit" onClick={handleSubmit}>
                        Submit
                    </button>
                </form>
            </fieldset>
        </div>
    );
};
