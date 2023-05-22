import { IconBrandFacebook, IconBrandGithub, IconBrandInstagram, IconBrandLinkedin, IconBrandYoutube } from "@tabler/icons-react"
import RedeSocial from "./RedeSocial"

export default function RedesSociais() {
    return (
        <div className="flex">
            <RedeSocial icone={<IconBrandYoutube />} url="https://www.youtube.com/@eliaseloy" />
            <RedeSocial icone={<IconBrandInstagram />} url="https://www.instagram.com/elias.eloy" />
            <RedeSocial icone={<IconBrandFacebook />} url="https://www.facebook.com/elias.eloy/" />
            <RedeSocial icone={<IconBrandLinkedin />} url="https://www.linkedin.com/in/eliaseloy/" />
            <RedeSocial icone={<IconBrandGithub />} url="https://github.com/eliaseloy" />
        </div>
    )
}