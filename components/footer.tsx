"use client"

export default function Footer() {
    return (
        <>
            {/* Terminal hint */}
            <div className="pt-8 text-sm text-muted-foreground">
                <p>Try the terminal on the right →</p>
                <p className="mt-1">Type "help" to see available commands</p>
                <div className="mt-2 flex items-center gap-4 text-base">
                    <a href='https://cs.uwatering.com/#https://williamdai.dev/?nav=prev'>←</a>
                    <a href='https://cs.uwatering.com/#https://williamdai.dev/' target='_blank'>
                        <img
                            src='/webring_icon.svg'
                            alt='CS Webring'
                            className="w-6 h-6 opacity-100"
                        />
                    </a>
                    <a href='https://cs.uwatering.com/#https://williamdai.dev/?nav=next'>→</a>
                </div>
            </div>
        </>
    )
}