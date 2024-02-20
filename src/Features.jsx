function Features() {

    const sudrow1 = [{
        size: "Fully Responsive",
        content: "This theme will look great on any device, no matter the size!",
        icon: "bi-window m-auto text-primary"
    },
    {
        size: "Bootstrap 5 Ready",
        content: "Featuring the latest build of the new Bootstrap 5 framework!",
        icon: "bi-layers m-auto text-primary"
    },
    {
        size: "Easy to Use",
        content: "Ready to use with your own content, or customize the source files!",
        icon: "bi-terminal m-auto text-primary"
    }

    ]


    return <>
        <section className="features-icons bg-light text-center">
            <div className="container">
                <div className="row">
                    {
                        sudrow1.map((row1data, index) => {
                            return <>
                                <div className="col-lg-4" key={index}>
                                    <div className="features-icons-item mx-auto mb-5 mb-lg-0 mb-lg-3">
                                        <div className="features-icons-icon d-flex"><i className={row1data.icon}></i></div>
                                        <h3>{row1data.size}</h3>
                                        <p className="lead mb-0">{row1data.content}</p>
                                    </div>
                                </div>
                            </>
                        })
                    }
                </div>
            </div>
        </section>
    </>
}
export default Features