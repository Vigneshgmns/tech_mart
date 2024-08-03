
const RegisterLogin = ({ isLogin = false }) => {
  return (
    <>
      <div className=" px-[140px] py-[60px] flex gap-[250px] cursor-pointer">
        <div className="flex justify-center items-center">
          <img src="/images/login.png" alt="" className="max-h-[400px]" />
        </div>

        <div>
          <p className="text-[#1ABA1A] font-bold text-[28px] mt-[]10px mb-[5px]">{isLogin ? "Welcome Back" : "Register"}</p>
          <p className="text-[#999999] text-[14px] uppercase">{isLogin ? "login to continue" : "Join to us"}</p>
          {
            !isLogin &&
            <div className="flex flex-col gap-[5px] mt-[25px]">
              <label className="capitalize text-[14px]">your name</label>
              <input type="text" name="name" placeholder="Dave Gray" className="p-[10px]  border-[1px] rounded-md w-[400px]" />
            </div>
          }
          <div className="flex flex-col gap-[5px] capitalize text-[14px] mt-[25px]">
            <label className="capitalize text-[14px]">email address</label>
            <input type="email" name="email" placeholder="jhon@gmail.com" className="p-[10px] border-[1px] rounded-md w-[400px]" />
          </div>
          <div className="flex flex-col gap-[5px] mt-[25px] ">
            <label className="capitalize text-[14px]">password</label>
            <input type="password" name="password" placeholder="**********" className="p-[10px]  border-[1px] rounded-md w-[400px]" />
            <p className="text-[#999999] text-[13px]">{isLogin ? "Forgot password ?" : ""}</p>
          </div>
          {
            !isLogin &&
            <div className="flex flex-col gap-[5px] mt-[25px]">
              <label className="capitalize text-[14px]">confirm password</label>
              <input type="password" name="password" placeholder="**********" className="p-[10px]  border-[1px] rounded-md w-[400px]" />

            </div>
          }
          <button className="bg-[#1ABA1A] text-[#ffffff] rounded-md px-[40px] py-[10px] uppercase mt-[25px]">{isLogin ? "Login" : "Register"}</button>

          <p className="mt-[7px] uppercase text-[13px] text-[#999999]">
            {isLogin ? 'new user ?' : 'alredy user ?'}
            <a className="text-[#1ABA1A] underline" href={isLogin ? '/register' : '/login'}>
              {isLogin ? 'sign up' : 'login'}
            </a>
          </p>
        </div>
      </div>
    </>
  )
}

export default RegisterLogin
