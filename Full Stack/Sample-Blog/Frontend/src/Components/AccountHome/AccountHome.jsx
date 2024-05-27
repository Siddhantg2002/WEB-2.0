import { useAuth } from '../../../Auth/AuthContext';

const AccountHome = () => {
  const { username } = useAuth();
  return (
    <div className="diff aspect-[16/9]">
    <div className="diff-item-1">
      <div className="bg-primary text-primary-content text-6xl font-black grid place-content-center">{`Hello ${username}`}</div>
    </div>
    <div className="diff-item-2">
      <div className="bg-base-200 text-6xl font-black grid place-content-center">{`Hello ${username}`}</div>
    </div>
    <div className="diff-resizer"></div>
  </div>
  )
}

export default AccountHome