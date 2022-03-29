import Link from "next/link";
import MeetupList from "../components/meetups/MeetupList";

const DUMMY_DATA = [
  {
    id: "meetup-1",
    title: "Meetup 1",
    image: "https://source.unsplash.com/MySy-2bd930",
    address: "123 Fake St",
    description: "Meeting to talk about stuff",
  },
  {
    id: "meetup-2",
    title: "Meetup 2",
    image: "https://source.unsplash.com/0gGHxAbBTGc",
    address: "456 Fake AV",
    description: "Meeting to talk about Cool stuff",
  },
];

function HomePage() {
  return (
    <>
      <header>
        <nav>
          <ul>
            <li>
              <Link href="/"> Home</Link>
            </li>
            <li>
              <Link href="/new-meetup/details"> News Details</Link>
            </li>
          </ul>
        </nav>
      </header>
      <MeetupList meetups={DUMMY_DATA} />
    </>
  );
}
export default HomePage;
