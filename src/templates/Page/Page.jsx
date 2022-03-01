import Loading from "../../components/Loading/Loading";

export default function Page({ children, loading }) {
  return (
    <>
      {loading && <Loading />}
      {children}
    </>
  );
}
