function Hello(props){
    const {nama, jurusan} = props;

    return (
    <div>
        <h2>Hai saya {nama}</h2>
        <p> Saya jurusan  {jurusan}</p>
    </div>
    );
};
export default Hello;