import { useState } from "react";
import Card from "../component/Card";

function Homepage() {
  const [people, setPeople] = useState([
    {
      initials: "AP",
      fullName: "Artūrs Puško",
      profession: "Javascript developer",
      visible: true,
    },
    {
      initials: "RG",
      fullName: "Ričards Gailums",
      profession: "Javascript developer",
      visible: true,
    },
    {
      initials: "LN",
      fullName: "Līga Niedola",
      profession: "Javascript developer",
      visible: true,
    },
    {
      initials: "R",
      fullName: "Raivo",
      profession: "Javascript developer",
      visible: true,
    },
    {
      initials: "TU",
      fullName: "Test User",
      profession: "React developer",
      visible: true,
    },
  ]);

  function onDelete(index) {
    const newPeople = [...people];
    newPeople[index].visible = false;

    setPeople(newPeople);
  }

  function restorePeople() {
    const newPeople = people.map((person) => {
      person.visible = true;

      return person;
    });

    setPeople(newPeople);
  }

  return (
    <div className="font-bold text-xl p-4 max-w-[600px] flex justify-between">
      <div className="flex flex-col space-y-3">
        {people.map((person, index) => {
          if (person.visible) {
            return (
              <Card
                initials={person.initials}
                fullName={person.fullName}
                profession={person.profession}
                onDelete={() => {
                  onDelete(index);
                }}
              />
            );
          }
          return null;
        })}
      </div>

      <button
        onClick={() => {
          restorePeople();
        }}
      >
        Restore
      </button>
    </div>
  );
}

export default Homepage;
