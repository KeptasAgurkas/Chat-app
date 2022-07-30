import {
    createContext,
    PropsWithChildren,
    useContext,
    useEffect,
    useRef,
} from 'react'
import Gun, { IGunInstance, IGunSchema } from 'gun'

type GunDbSchema = {
    messages: {
        [chatId: string]: {
            [day: string]: {
                [hour: string]: {
                    [messageId: string]: {
                        content: string
                        timestamp: number
                    }
                }
            }
        }
    }
}

const GunDbContext = createContext<IGunInstance<GunDbSchema> | null>(null)

declare global {
    interface Window {
        gun: any
    }
}

export function useGun() {
    const gun = useContext(GunDbContext)
    if (gun == null) throw new Error('Please provide gun db instance')
    return gun
}

export function GunProvider(props: PropsWithChildren<{}>) {
    const gunDbUrl = `${window.location.href}/gun`
    const gun = useRef(
        Gun<GunDbSchema>(['https://gun-manhattan.herokuapp.com/gun'])
    )
    useEffect(() => {
        window.gun = gun.current
    }, [])

    return (
        <GunDbContext.Provider value={gun.current}>
            {props.children}
        </GunDbContext.Provider>
    )
}
