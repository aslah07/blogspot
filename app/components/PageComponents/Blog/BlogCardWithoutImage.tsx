import CharsLimit from "../../features/CharsLimit";

export default function BlogCardWithoutImage({
  type,
  classname,
}: {
  type: string;
  classname?: string;
}) {
  {
    return (
      <div className={classname}>
        <h1 className="text-4xl font-semibold">{type}</h1>
        {[1, 2, 3, 4].map((item) => (
          <div key={item} className="flex items-center gap-4 my-4">
            <div className="text-5xl text-gray-400">{item}</div>
            <div>
              <h3 className="text-2xl font-medium ">Post Title Lorem</h3>
              <CharsLimit 
                text="Lorem Ipsum is simply dummy text of the printing and typesetting
                industry. Lorem Ipsum has been the industry's standard dummy
                text ever since the 1500s, when an unknown printer took a galley
                of type and scrambled it to make a type specimen book. It has
                survived not only five centuries, but also the leap into
                electronic typesetting, remaining essentially unchanged"
                limit={60}
                classname="text-sm"
              />
            </div>
          </div>
        ))}
      </div>
    );
  }
}
