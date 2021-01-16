document.getElementById('submit').addEventListener('click', myFunction);

function myFunction() {
  const div = document.querySelector('div');
  div.classList.toggle('hasil');

  const nama = document.getElementById('nama').value;
  document.getElementById('h-nama').innerHTML = nama;

  const jumlah = document.getElementById('jumlah').value;
  document.getElementById('h-jumlah').innerHTML = jumlah;

  const kelas = document.getElementById('kelas').value;
  document.getElementById('h-kelas').innerHTML = kelas;

  const tujuan = document.getElementById('tujuan').value;
  document.getElementById('h-tujuan').innerHTML = tujuan;


  const bagasi = document.getElementsByName('bagasi');
  for(let i=0; i<bagasi.length; i++){
    if(bagasi[i].type==='radio'){
      if(bagasi[i].checked){
        document.getElementById('h-bagasi').innerHTML = bagasi[i].value;
      }
    }
  }

  // const prodi = document.getElementById('prodi');
  // document.getElementById('jurusan').innerHTML = prodi.value;

  const asuransi = document.getElementsByName('asuransi');
  // for(let i=0; i<asuransi.length; i++){
    //   if(asuransi[i].type == 'checkbox'){
    let tmpAsuransi;
      if(asuransi[0].checked){
        tmpAsuransi = asuransi[0].value;
      }
      if(asuransi[1].checked){
        tmpAsuransi += asuransi[1].value;
      }
      if(asuransi[2].checked){
        tmpAsuransi = asuransi[2].value;
      }

      document.getElementById('h-asuransi').innerHTML = tmpAsuransi;
      
        // let boxs = [];
        // boxs.push(asuransi[i].value);
        // boxs.forEach(box =>{
        //   document.getElementById('kesukaan').append(', ');
        // })
    // }
  // }
  
}