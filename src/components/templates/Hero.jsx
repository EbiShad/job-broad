function Hero() {
  return (
    <section className="py-12 container">
      <h1 className="text-center font-bold text-4xl">
        find your next dream job
      </h1>
      <p className="text-center text-gray-700 pt-3 text-xl ">
        Participatory Communication and Free Flow of Information and Knowledge
        has been advanced largely through use of the Internet by civil society
        corresponding to paragraph 6 in the 1999 Programme of Action calling the
        major instrument for several international organizations, notably the
        Culture of Peace News Network, the Good News Agency and the
      </p>

      <form className="flex gap-2 mt-4">
        <input
          placeholder="find your job"
          type="text"
          className="w-full px-3 py-2 border border-gray-400 rounded-md text-sm focus:outline-none focus:shadow-xl"
        />
        <button className="bg-purple-300 px-8 py-2 rounded text-gray-700 hover:bg-purple-400 transition ease-in-out delay-75">
          Search
        </button>
      </form>
    </section>
  );
}

export default Hero;
