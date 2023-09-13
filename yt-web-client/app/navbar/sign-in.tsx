import { signInWithGoogle, signOut } from '../firebase/firebase';
import styles from './signIn.module.css';
import { User } from 'firebase/auth';


interface SignInProps {
  user: User | null;
}

export default function SignIn({ user }: SignInProps) {

  return (
    <div>
      {user ? (
        // If user is signed in, show a welcome message (or something else)
        <button className={styles.signin} onClick={signOut}>
          Sign Out
        </button>
      ) : (
        // If user is not signed in, show sign-in button
        <button className={styles.signin} onClick={signInWithGoogle}>
          Sign in
        </button>
      )}
    </div>
  );
}
