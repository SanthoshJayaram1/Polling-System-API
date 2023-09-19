
//  to home default renders to here
export const home = (req, res) => {
    res.status(200).json({
        success: true,
        greeting: 'Hello from the polling system api'
    })
}