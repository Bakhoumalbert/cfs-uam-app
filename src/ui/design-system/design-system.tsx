// ICONE
import { RiUser2Fill, RiNotification2Fill } from "react-icons/ri";
// COMPOSANTS
import { Typography } from "./typography/typography";
import { Container } from "../component/container/container";
import { Spinner } from "./spinner/spinner";
import { Button } from "./button/button";

// DESIGN SYSTEM
export default function DesignSystem() {
  return (
    <>
           <Container className="py-10 space-y-10">
                {/* Typography */}
                <div className="space-y-2">
                        <Typography variant="h1" weight="medium">
                            Typography
                        </Typography>
                    <div className="flex flex-col gap-2 p-5 border border-gray-400 divide-y-2 divide-gray-400 rounded">
                        <div className="pb-5 space-y-2 pt-4">
                            <Typography variant="caption3" weight="medium">
                                display
                            </Typography>
                            <Typography variant="display" theme="gray">
                                Nothing is impossible with my God
                            </Typography>
                        </div>
                        <div className="pb-5 space-y-2 pt-4">
                            <Typography variant="caption3" weight="medium">
                                h1
                            </Typography>
                            <Typography variant="h1" >
                                Nothing is impossible with my God
                            </Typography>
                        </div>
                        <div className="pb-5 space-y-2 pt-4">
                            <Typography variant="caption3" weight="medium">
                                h2
                            </Typography>
                            <Typography variant="h2" theme="primary" >
                                Nothing is impossible with my God
                            </Typography>
                        </div>
                        <div className="pb-5 space-y-2 pt-4">
                            <Typography variant="caption3" weight="medium">
                                h3
                            </Typography>
                            <Typography variant="h3" >
                                Nothing is impossible with my God
                            </Typography>
                        </div>
                        <div className="pb-5 space-y-2 pt-4">
                            <Typography variant="caption3" weight="medium">
                                h4
                            </Typography>
                            <Typography variant="h4" theme="secondary">
                                Nothing is impossible with my God
                            </Typography>
                        </div>
                        <div className="pb-5 space-y-2 pt-4">
                            <Typography variant="caption3" weight="medium">
                                h5
                            </Typography>
                            <Typography variant="h5" >
                                Nothing is impossible with my God
                            </Typography>
                        </div>
                        <div className="pb-5 space-y-2 pt-4">
                            <Typography variant="caption3" weight="medium">
                                lead
                            </Typography>
                            <Typography variant="lead" >
                                Nothing is impossible with my God
                            </Typography>
                        </div>
                        <div className="pb-5 space-y-2 pt-4">
                            <Typography variant="caption3" weight="medium">
                                body-lg
                            </Typography>
                            <Typography variant="body-lg" >
                                Nothing is impossible with my God
                            </Typography>
                        </div>
                        <div className="pb-5 space-y-2 pt-4">
                            <Typography variant="caption3" weight="medium">
                                body-base
                            </Typography>
                            <Typography variant="body-base" >
                                Nothing is impossible with my God
                            </Typography>
                        </div>
                        <div className="pb-5 space-y-2 pt-4">
                            <Typography variant="caption3" weight="medium">
                                body-sn
                            </Typography>
                            <Typography variant="body-sn" >
                                Nothing is impossible with my God
                            </Typography>
                        </div>
                        <div className="pb-5 space-y-2 pt-4">
                            <Typography variant="caption3" weight="medium">
                                caption1
                            </Typography>
                            <Typography variant="caption1" >
                                Nothing is impossible with my God
                            </Typography>
                        </div>
                        <div className="pb-5 space-y-2 pt-4">
                            <Typography variant="caption3" weight="medium">
                            caption2
                            </Typography>
                            <Typography variant="caption2" >
                                Nothing is impossible with my God
                            </Typography>
                        </div>
                        <div className="pb-5 space-y-2 pt-4">
                            <Typography variant="caption3" weight="medium">
                                caption3
                            </Typography>
                            <Typography variant="body-lg" >
                                Nothing is impossible with my God
                            </Typography>
                        </div>
                        <div className="pb-5 space-y-2 pt-4">
                            <Typography variant="caption3" weight="medium">
                                caption4
                            </Typography>
                            <Typography variant="caption4" >
                                Nothing is impossible with my God
                            </Typography>
                        </div>
                        <div className="pb-5 space-y-2 pt-4">
                            <div className="flex flex-row divide-x-2 divide-gray-400">
                                <div className="flex flex-col gap-2 p-4">
                                    <Typography variant="caption1">
                                        caption1
                                    </Typography>
                                    <Typography variant="caption1" weight="regular">
                                        Regular
                                    </Typography>
                                    <Typography variant="caption1" weight="medium">
                                        Meduim
                                    </Typography>
                                </div>
                                <div className="flex flex-col gap-2 p-4">
                                    <Typography variant="caption2">
                                        caption1
                                    </Typography>
                                    <Typography variant="caption2" weight="regular">
                                        Regular
                                    </Typography>
                                    <Typography variant="caption2" weight="medium">
                                        Meduim
                                    </Typography>
                                </div>
                                <div className="flex flex-col gap-2 p-4">
                                    <Typography variant="caption3">
                                        caption3
                                    </Typography>
                                    <Typography variant="caption3" weight="regular">
                                        Regular
                                    </Typography>
                                    <Typography variant="caption3" weight="medium">
                                        Meduim
                                    </Typography>
                                </div>
                                <div className="flex flex-col gap-2 p-4">
                                    <Typography variant="caption4">
                                        caption4
                                    </Typography>
                                    <Typography variant="caption4" weight="regular">
                                        Regular
                                    </Typography>
                                    <Typography variant="caption4" weight="medium">
                                        Meduim
                                    </Typography>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="flex flex-row space-x-2 divide-x-2 divide-gray-400">
                    <div className="flex items-start gap-3 px-2">
                        {/* Snippers */}
                        <div className="space-y-2">
                            <Typography variant="caption1" weight="medium">
                                Snippers
                            </Typography>
                            <div className="flex items-center gap-2 p-5 rounded">
                                <Spinner size="small" />
                                <Spinner />
                                <Spinner size="large" />
                            </div>
                        </div>
                    </div>

                    {/* Avatar */}
                    <div className="space-y-2 px-4">
                            <Typography variant="caption1" weight="medium">
                                Avatar
                            </Typography>
                            <div className="flex items-center gap-2 p-5 border border-gray-400 rounded">
                                {/* <Avatar src="/assets/images/monimage.png" alt="avatar de Albert" size="small" />
                                <Avatar src="/assets/images/monimage.png" alt="avatar de Albert" />
                                <Avatar src="/assets/images/monavatar.jpeg" alt="avatar de Albert" size="large" /> */}
                            </div>
                        </div>
                    {/* Logo */}
                    <div className="space-y-2 px-4">
                            <Typography variant="caption1" weight="medium">
                                Logo
                            </Typography>
                            <div className="flex items-center gap-2 p-5 border border-gray-400 rounded">
                                {/* <Logo size="very-small" />
                                <Logo size="small" />
                                <Logo />
                                <Logo size="large" /> */}
                            </div>
                        </div>
                    </div>

                    <div className="flex items-start gap-3">
                        {/* Buttons */}
                        <div className="space-y-2">
                            <Typography variant="h3" weight="medium">
                                Buttons
                            </Typography>
                            <div className="flex flex-col items-start gap-2 p-5 border border-gray-400 divide-y-2 divide-gray-400 rounded">
                                <Typography variant="h5" weight="medium">
                                    Small
                                </Typography>
                                <div className="flex flex-row p-4 gap-4">
                                    <Button isLoading size="small">Accent</Button>
                                    <Button isLoading size="small" icon={{ icon: RiUser2Fill}} iconPosition="left" >Accent</Button>
                                    <Button isLoading size="small" variant="secondary" >Accent</Button>
                                    <Button isLoading size="small" variant="outline">Accent</Button>
                                    <Button isLoading size="small" variant="disabled" disabled>Accent</Button>
                                    <Button isLoading size="small" variant="ico" icon={{ icon: RiUser2Fill}} />
                                    <Button isLoading size="small" variant="ico" iconTheme="gray" icon={{ icon: RiUser2Fill}} />
                                    <Button isLoading size="small" variant="ico" iconTheme="secondary" icon={{ icon: RiNotification2Fill}} />
                                </div>
                                <div className="flex flex-row p-4 gap-4">
                                    <Button size="small">Accent</Button>
                                    <Button size="small"icon={{ icon: RiUser2Fill}} iconPosition="left" >Accent</Button>
                                    <Button size="small" variant="secondary" >Accent</Button>
                                    <Button size="small" variant="outline">Accent</Button>
                                    <Button size="small" variant="disabled" disabled>Accent</Button>
                                    <Button size="small" variant="ico" icon={{ icon: RiUser2Fill}} />
                                    <Button size="small" variant="ico" iconTheme="gray" icon={{ icon: RiUser2Fill}} />
                                    <Button size="small" variant="ico" iconTheme="secondary" icon={{ icon: RiNotification2Fill}} />
                                </div>
                                <Typography variant="h5" weight="medium">
                                    Medium
                                </Typography>
                                <div className="flex flex-row p-4 gap-4">
                                    <Button isLoading size="medium">Accent</Button>
                                    <Button isLoading size="medium" icon={{ icon: RiUser2Fill}} iconPosition="left" >Accent</Button>
                                    <Button isLoading size="medium" variant="secondary" >Accent</Button>
                                    <Button isLoading size="medium" variant="outline">Accent</Button>
                                    <Button isLoading size="medium" variant="disabled" disabled>Accent</Button>
                                    <Button isLoading size="medium" variant="ico" icon={{ icon: RiUser2Fill}} />
                                    <Button isLoading size="medium" variant="ico" iconTheme="gray" icon={{ icon: RiUser2Fill}} />
                                    <Button isLoading size="medium" variant="ico" iconTheme="secondary" icon={{ icon: RiNotification2Fill}} />
                                </div>
                                <div className="flex flex-row p-4 gap-4">
                                    <Button size="medium">Accent</Button>
                                    <Button size="medium"icon={{ icon: RiUser2Fill}} iconPosition="left" >Accent</Button>
                                    <Button size="medium" variant="secondary" >Accent</Button>
                                    <Button size="medium" variant="outline">Accent</Button>
                                    <Button size="medium" variant="disabled" disabled>Accent</Button>
                                    <Button size="medium" variant="ico" icon={{ icon: RiUser2Fill}} />
                                    <Button size="medium" variant="ico" iconTheme="gray" icon={{ icon: RiUser2Fill}} />
                                    <Button size="medium" variant="ico" iconTheme="secondary" icon={{ icon: RiNotification2Fill}} />
                                </div>
                                <Typography variant="h5" weight="medium">
                                    Large
                                </Typography>
                                <div className="flex flex-row p-4 gap-4">
                                    <Button isLoading size="large">Accent</Button>
                                    <Button isLoading size="large" icon={{ icon: RiUser2Fill}} iconPosition="left" >Accent</Button>
                                    <Button isLoading size="large" variant="secondary" >Accent</Button>
                                    <Button isLoading size="large" variant="outline">Accent</Button>
                                    <Button isLoading size="large" variant="disabled" disabled>Accent</Button>
                                    <Button isLoading size="large" variant="ico" icon={{ icon: RiUser2Fill}} />
                                    <Button isLoading size="large" variant="ico" iconTheme="gray" icon={{ icon: RiUser2Fill}} />
                                    <Button isLoading size="large" variant="ico" iconTheme="secondary" icon={{ icon: RiNotification2Fill}} />
                                </div>
                                <div className="flex flex-row p-4 gap-4">
                                    <Button size="large">Accent</Button>
                                    <Button  size="large"icon={{ icon: RiUser2Fill}} iconPosition="left" >Accent</Button>
                                    <Button size="large" variant="secondary" >Accent</Button>
                                    <Button size="large" variant="outline">Accent</Button>
                                    <Button size="large" variant="disabled" disabled>Accent</Button>
                                    <Button size="large" variant="ico" icon={{ icon: RiUser2Fill}} />
                                    <Button size="large" variant="ico" iconTheme="gray" icon={{ icon: RiUser2Fill}} />
                                    <Button size="large" variant="ico" iconTheme="secondary" icon={{ icon: RiNotification2Fill}} />
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </Container>
        </>
  )
}
