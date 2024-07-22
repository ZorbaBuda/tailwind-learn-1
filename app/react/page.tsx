import UseState from "@/components/react/UseState";

export default function page() {

  try {

  let numbers = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9];

//Add new elements to the end of an array
numbers.push(11);
numbers.push(12, 13);

//unshift method for insert at the beginning
numbers.unshift(-2);
numbers.unshift(-4, -3);

//removes a value from the end of an array
numbers.pop();
//removes an element from the beginning of the array
numbers.shift();

console.log(numbers)








  }catch (error) {
    console.log(error)
  }

  return (
    <section className="pt-20 px-10">
      <UseState />
    </section>
  );
}
