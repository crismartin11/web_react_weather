
const Selector = ({ list, selected, setSelected }) => {

	const handleChange = (event) => setSelected(list.find(x => x.id == event.target.value));
	
	return (
		<form>
			<div className="form-group">
				<label htmlFor="cities">Cities</label>
				<select className="form-control" id="cities" onChange={handleChange}>
					{list && (
						list.map(element => <option key={element.id} value={element.id}>{element.name}</option>)
					)}
				</select>
			</div>
		</form>
)
};

export default Selector;
