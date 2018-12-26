import React from 'react';
import sortMultidimensionalArrayFunc from 'sort-multidimensional-array-func';
import { block } from 'bem-cn';
import './Table.css'
const cn = block('bem-cn');

const TABLE_COLUMNS = [
  {
    label: 'Score',
    sort: 'default',
  },
  {
    label: 'Reviews',
  },
  {
    label: 'Main Genre',
  },
  {
    label: 'Release Date',
  },
  {
    label: 'Status',
  },
  {
    label: '',
  },
];

const SortableHeader = (props) => {
  const { columns} = props;

  return(
    <thead>
    <tr >
        <th style={{ width: '356px' }}>
          <div style={{ paddingLeft: '31px', textAlign: 'left' }}>Title</div>
        </th>
      {columns.map((element, index) =>
        <th key={index}>
          {element.label}
        </th>
      )}
    </tr>
    </thead>
  );
}

const SortableBody = (props) => {
  const { data } = props;

  return(
    <tbody>
        {data.map((index) =>
          <tr key={index} >
            <td><div className="left-td"><img src={index.img} alt="Avatar"/><div className="title"  ><h5>{index.name}</h5><p>{index.publisher}</p></div></div></td>
            <td style={{width: '124px'}}><span className="score" style={{backgroundColor: index.scoreColor, borderColor:index.scoreColor}}>{index.score}</span></td>
            <td style={{width: '170px'}}><p className="reviews" style={{color: index.scoreColor}}>{index.reviews}</p><p className="valueReviews">{index.valueReviews}</p></td>
            <td style={{width: '155px'}}><p style={{color: '#354052'}}>{index.mainGenre}</p></td>
            <td style={{width: '165px'}}><p style={{color: '#354052'}}>{index.releaseDate}</p></td>
            <td style={{width: '156px'}}><span className="status" style={{backgroundColor: index.statusColor, borderColor:index.statusColor}}>{index.status}</span></td>
            <td><div className="right-td"><span>{index.setting1}</span><span className="right-td-center">{index.setting2}</span><span>{index.setting3}</span></div></td>
          </tr>)}
    </tbody>
  );
}

export default class GameList extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      data: [],
      columns: TABLE_COLUMNS,
    };
  }

  componentWillMount() {
    const { data } = this.props;
    this.setState({ data });
  }

  componentWillReceiveProps(nextProps) {
    const { data } = nextProps;
    this.setState({ data });
  }

  render() {
    return (
      <table className={cn}>
        <SortableHeader columns={this.state.columns}  />
        <SortableBody data={this.state.data} />
      </table>
    );
  }
}