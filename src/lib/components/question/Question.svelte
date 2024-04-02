<script>
	let questions = [
		{
			id: 1,
			question: "You're about to embark on a dangerous mission.",
			options: [
				'Do you meticulously craft a battle plan',
				'Thrive on adapting to the situation as it unfolds'
			],
			response: [
				{
					character: 'Aang',
					response: 3
				},
				{
					character: 'Katara',
					response: 2
				},
				{
					character: 'Sokka',
					response: 1
				},
				{
					character: 'Toph',
					response: 4
				},
				{
					character: 'Suki',
					response: 2
				},
				{
					character: 'Azula',
					response: 3
				},
				{
					character: 'Zuko',
					response: 4
				},
				{
					character: 'Tenzin',
					response: 2
				},
				{
					character: 'Korra',
					response: 5
				},
				{
					character: 'Lin Beifong',
					response: 3
				},
				{
					character: 'Asami',
					response: 2
				}
			]
		}
	];
</script>

<div class="flex justify-center items-center h-screen">
	<div
		class="flex flex-col justify-between items-center bg-white p-8 rounded-lg shadow-lg w-[70%] h-[60%]"
	>
		<h1 class=" text-3xl font-bold pb-4">Question {questions[0].id}</h1>
		<p>{questions[0].question}</p>

		<div class="flex justify-between w-full">
			<p class="w-[40%] text-center">{questions[0].options[0]}</p>
			<p>OR</p>
			<p class="w-[40%] text-center">{questions[0].options[1]}</p>
		</div>
		<form class="flex flex-col w-full">
			<div class="flex justify-between ml-[20%] mr-[20%]">
				<div class="flex flex-col items-center">
					<input type="radio" id="1" name="rating" value="1" />
					<label for="1">1</label>
				</div>
				<div class="flex flex-col items-center">
					<input type="radio" id="2" name="rating" value="2" />
					<label for="2">2</label>
				</div>
				<div class="flex flex-col items-center">
					<input type="radio" id="3" name="rating" value="3" />
					<label for="3">3</label>
				</div>
				<div class="flex flex-col items-center">
					<input type="radio" id="4" name="rating" value="4" />
					<label for="4">4</label>
				</div>
				<div class="flex flex-col items-center">
					<input type="radio" id="5" name="rating" value="5"/>
					<label for="5">5</label>
				</div>
			</div>

			<input type="submit" value="Next Question" />
		</form>
	</div>
</div>
