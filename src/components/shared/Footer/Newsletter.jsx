import { useForm } from "react-hook-form";

const Newsletter = () => {
    const {reset, register, handleSubmit} = useForm();

    const onSubmit = (data) => {
        console.log(data);
        reset();
    }
  return (
    <div className="flex flex-col gap-3">
      <h3 className="text-lg font-semibold font-serif mb-2">Stay Inspired</h3>
      <p className="text-base-content/70 text-sm mb-2">
        Subscribe to receive weekly wisdom and life lessons directly to your
        inbox.
      </p>
      <form onSubmit={handleSubmit(onSubmit)} className="join">
        <input
          type="email"
          placeholder="your@email.com"
          {...register("email")}
          className="input input-bordered focus:border-info focus:outline-base-300 join-item w-full max-w-xs"
        />
        <button type="submit" className="btn btn-primary join-item">Subscribe</button>
      </form>
    </div>
  );
};

export default Newsletter;