const home = () =>{
    const header = document.createElement('h1');
    const image = document.createElement('img');
    const para = document.createElement('p');
    const content = document.querySelector('#content');
    

    header.textContent = 'Restaurant';
    image.src = '../dist/picture.jpeg';
    para.textContent = 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aliquam posuere, nisl sed mattis interdum, est leo facilisis arcu, hendrerit bibendum erat urna nec quam. Nunc sit amet tristique massa. Quisque nunc nisl, ornare ac justo eget, luctus gravida magna. Ut ac viverra tortor. Sed tincidunt, orci et mattis ultrices, est erat fermentum urna, interdum scelerisque orci dolor ut leo. Nam bibendum sed nisl eu ornare. Praesent semper vestibulum accumsan. Curabitur enim tortor, luctus ac sagittis non, placerat at quam. Nunc rhoncus, ipsum nec lobortis gravida, neque ipsum lobortis augue, vel lobortis purus turpis eget lectus. Fusce maximus, lacus eget molestie cursus, neque turpis imperdiet ligula, nec sagittis nisl mauris id augue. Morbi tempor felis ipsum, vel malesuada elit vehicula ac. Curabitur eu ante vel sapien ornare faucibus nec in erat. \
    Maecenas sed massa bibendum, volutpat mi eu, euismod augue. Fusce cursus posuere orci, rhoncus posuere magna suscipit vitae. Ut et viverra lectus. Donec tincidunt, massa ac aliquam sollicitudin, lacus ligula lobortis mi, eu vehicula dolor risus at enim. Sed dictum nunc tellus. Vestibulum porta dictum dolor malesuada interdum. Nullam a euismod dui. Mauris fringilla sapien vel porta lobortis. Nam sollicitudin magna a porta ultricies. Sed vel est bibendum, aliquam elit et, bibendum diam. Sed nulla orci, scelerisque vel malesuada a, pulvinar eu dui. Sed accumsan risus eros, id ultrices diam aliquam nec. Suspendisse aliquam nulla et ipsum lacinia pellentesque.'

    header.classList.add('homeh1')
    image.classList.add('homeimg')
    para.classList.add('homep')

    content.style.cssText = 'width: 700px; height:700px; align-items: flex-start; \
    justify-content: center; top: 50%;'

    content.appendChild(header)
    content.appendChild(image)
    content.appendChild(para)

}

export default home