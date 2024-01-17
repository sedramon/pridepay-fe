import Link from "next/link";
import styles from "./styles/page.module.css";
import Image from "next/image";

export default function Home() {
  
  return (
    <div>
      <div
        className={`d-flex flex-column align-items-center justify-content-end ${styles["banner"]}`}
      >
        <div
          className={`d-flex flex-column align-items-center justify-content-end ${styles["banner-div"]}`}
        >
          <h3>The simpler, safer way to pay and get paid.</h3>
          <Link href="/users/signup" className={`btn ${styles["button-banner"]}`}>
            Sign Up for free
          </Link>
          <p>Own a business? Open a business account. </p>
        </div>
      </div>
      <div>
        <Image
          src="/rainbow.png"
          alt="pridepay-rainbow-image"
          width={1920}
          height={10}
          layout="responsive"
          style={{
            position: "absolute",
            width: "100%",
            height: "100%",
            objectFit: "cover",
          }}
          loading="lazy"
        ></Image>
      </div>
      <div
        className={`w-100 p-3 ${styles["content"]}`}
      >
        <div>
          <h1>PridePay is for everyone who pays or gets paid</h1>
        </div>
        <div
          className={`d-flex align-items-center ${styles["content-small-divs"]}`}
        >
          <div>
            <h2>Individuals</h2>
            <p>
              Find out why we have <br /> more than 200M active <br /> accounts
              worldwide.
            </p>
            <Link
              href="/"
              className={`btn btn-outline-primary ${styles["button-read-more"]}`}
            >
              Read more
            </Link>
          </div>
          <div>
            <h2>Business</h2>
            <p>
              Join more than 7 million <br /> businesses around the <br /> world
              offering PayPal.
            </p>
            <Link
              href="/"
              className={`btn btn-outline-primary ${styles["button-read-more"]}`}
            >
              Read more
            </Link>
          </div>
          <div>
            <h2>Partners & Developers</h2>
            <p>
              Work with PridePay to of- <br /> fer your customers world <br />{" "}
              class payment solutions.
            </p>
            <Link
              href="/"
              className={`btn btn-outline-primary ${styles["button-read-more"]}`}
            >
              Read more
            </Link>
          </div>
        </div>
      </div>
      <div
        className={`d-flex flex-column align-items-center justify-content-center p-4 ${styles["content-2"]}`}
      >
        <div className="mb-5">
          <h1>Join 200M active PridePay accounts worldwide.</h1>
        </div>
        <div
          className={`d-flex align-items-start justify-content-around ${styles["content-2-divs"]}`}
        >
          <div>
            <h2 className="mb-4">Safer and protected</h2>
            <p>
              Shop with peace of mind. We don’t share your full financial
              information with sellers. And PridePal Buyer Protection covers
              your eligible purchases if they don’t show up or match their
              description.
            </p>
            <Link href="/" style={{ fontWeight: 900 }}>
              More about fees
            </Link>
          </div>
          <div>
            <h2 className="mb-4">Mostly free, always upfront</h2>
            <p>
              It’s free to open a PridePal account and buy something using
              PridePal unless it involves a currency conversion. There may be
              fees for other transactions.
            </p>
            <Link href="/" style={{ fontWeight: 900 }}>
              More about security
            </Link>
          </div>
        </div>
      </div>
      <div
        className={`d-flex flex-column align-items-center justify-content-center ${styles["content-3"]}`}
      >
        <div>
          <h2 className="mb-4">Sign up and get started.</h2>
          <Link href="/" className={`btn ${styles["button-banner"]}`}>
            Get started
          </Link>
        </div>
      </div>
      <div
        className={`d-flex flex-column align-items-center justify-content-center ${styles["content-4"]}`}
      >
        <div>
          <p className="text-white">
            Udis di del essus modisquis iunt. Met lam, omniet eniasit atemquodia
            aut hicillaborum quide et reperorum hitis que odia is delignate
            atemo inciatatem. Minvelit pe prae. Pis que nimuscit veremo officiet
            quat.
          </p>
          <p className="text-white">
            Ebis maximilibus esto iditatempor alit, quo evelese liquunt.
          </p>
          <p className="text-white">
            Omnis quia aperis et fugitia tionseq uassunte et quam int quam
            seditaecte am reriatiantis este coressi sum net minihil lorecearum
            iducium aut arum vendemporit occum et as evendignate se pa
            esciuntium ium iderferaesto te vellesse ex ex eum re et aut quo et
            dolendaecus re oditas doloreperio. Um eos nullupta quis sed quo
            veniet fugitius alictenis et ullo ditat r
          </p>
          <Image
            src="/logo-blue.png"
            alt="pridepay-logo-image"
            width={200}
            height={70}
            loading="lazy"
          />
        </div>
      </div>
      <div>
        <Image
          src="/rainbow.png"
          alt="pridepay-rainbow-image"
          width={1920}
          height={20}
          layout="responsive"
          style={{
            position: "absolute",
            width: "100%",
            height: "100%",
            objectFit: "cover",
          }}
          loading="lazy"
        ></Image>
      </div>
    </div>
  );
}
