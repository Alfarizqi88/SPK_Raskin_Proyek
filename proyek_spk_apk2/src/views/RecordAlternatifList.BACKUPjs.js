import React, { Component } from "react";

class RecordAlternatifList extends Component {

    render() {
        return (
            <tr>
                <td>
                    {this.props.obj.nama_alternatif}
                </td>
                <td><center><button className="btn btn-primary">Edit</button>  <button className="btn btn-danger">Hapus</button></center></td>                    
            </tr>
        )
    }
}

export default RecordAlternatifList